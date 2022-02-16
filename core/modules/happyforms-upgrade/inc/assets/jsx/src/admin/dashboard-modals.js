import DashboardModals from '@happyforms/core/jsx/src/admin/dashboard-modals';
import { SlotFillProvider, Button, Modal, Guide, Popover, Notice, ExternalLink, TextControl, CheckboxControl, BaseControl } from '@wordpress/components';
import { useState, useReducer, useRef } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';

( function( $, settings ) {

	/**
	 *
	 * Review modal
	 *
	 */
	const ReviewModal = ( props ) => {
		const imageURL = `${settings.pluginURL}inc/assets/img/yeah.gif`;
		
		return(
			<Guide
				onFinish={ props.onRequestClose }
				className="happyforms-modal happyforms-modal--review"
				pages={ [
					{
						image: (
							<picture>
								<img src={imageURL} width="450" height="276" />
							</picture>
						),
						content: (
							<>
							<div className="happyforms-modal__header">
								<h1>{ __( 'Heck yeah! A milestone', 'happyforms' ) }</h1>
							</div>
							<div className="happyforms-modal__body">
								<p dangerouslySetInnerHTML={{ __html: sprintf( __( 'That’s <i>%d</i> replies you’ve got so far. Nicely done! Rock on.', 'happyforms' ), props.activityCount ) }} />
								<p>{ __( 'We wanna ask a favor. Kinda awkward, we know. But really. Could you please give us a five-star rating on WordPress?', 'happyforms' ) }</p>
								<ul>
									<li>{ __( '79% of shoppers trust anonymous plugin reviews', 'happyforms' ) }</li>
									<li>{ __( '88% of customers read reviews before they picked us', 'happyforms' ) }</li>
									<li>{ __( '1% of users have ever bothered to leave us a review', 'happyforms' ) }</li>
								</ul>
								<p>{ __( 'So whattaya say? Got two minutes to help us out?', 'happyforms' ) }</p>
							</div>
							<div className="happyforms-modal__footer">
								<BaseControl>
									<Button 
										isPrimary={true} 
										href="https://wordpress.org/support/plugin/happyforms/reviews/#new-post" 
										target="_blank" 
										onClick={ props.onRequestClose } 
										text={ __( 'Okay, you deserve it', 'happyforms' ) }>
									</Button>
									<Button 
										isSecondary={true} 
										onClick={ props.onRequestCloseAll } 
										text={ __( 'I already did', 'happyforms' ) }>
									</Button>
								</BaseControl>
							</div>
							</>
						),
					},
				] }
			/>
		);
	}

	/**
	 *
	 * Subscription modal
	 *
	 */
	const SubscribeModal = ( props ) => {
		const imageURL = `${settings.pluginURL}/inc/assets/img/subscribe.gif`;

		const initialState = {
			email: '',
			registrationKey: '',
			step: 'request_key',
			notice: null,
			disabled: false,
		};

		const reducer = ( state, newState ) => {
			return { ...state, ...newState };
		};

		const [state, dispatch] = useReducer(reducer, initialState);

		const requestKey = () => {
			dispatch( {
				notice: null,
				disabled: true,
			} );

			if ( '' === state.email.trim() || state.email.indexOf( '@' ) < 0 ) {
				dispatch( {
					disabled: false,
					notice: {
						status: 'error',
						message: __( 'Please enter an email address.', 'happyforms' ),
					},
					step: 'request_key',
				} );

				return;
			}

			$.post( ajaxurl, {
				action: settings.subscribeModalActionRequestKey,
				_wpnonce: settings.subscribeModalNonceRequestKey,
				product_plan: settings.subscribeModalProductPlan,
				email: state.email,
			}, function( response ) {
				dispatch( {
					disabled: false,
					notice: {
						status: response.success ? 'success' : 'error',
						message: response.data,
					},
					step: response.success ? 'register_key' : 'request_key',
				} );
			} );
		};

		const registerKey = () => {
			dispatch( {
				notice: null,
				disabled: true,
			} );

			$.post( ajaxurl, {
				action: settings.subscribeModalActionAuthorize,
				_wpnonce: settings.subscribeModalNonceAuthorize,
				product_plan: settings.subscribeModalProductPlan,
				license_key: state.registrationKey,
			}, function( response ) {
				if ( response.success ) {
					return props.onRequestCloseAndRemoveBadge();
				}

				dispatch( {
					disabled: false,
					notice: {
						status: response.success ? 'success' : 'error',
						message: response.data,
					},
				} );
			} );
		}

		const getNotice = () => {
			if ( ! state.notice ) {
				return <></>
			} else {
				return <Notice status={ state.notice.status } isDismissible={ false }>{ state.notice.message }</Notice>
			}
		};

		const getStep = () => {
			switch( state.step ) {
				case 'request_key':
					return(
						<>
						<div className="happyforms-modal__body">
							<label>{ __( 'Email address', 'happyforms' ) }</label>
							<input 
								type="email" 
								value={ state.email } 
								placeholder={ __( 'Use the email address connected with your account', 'happyforms' ) } 
								onChange={ ( e ) => { dispatch( { email: e.target.value } ) } }
								disabled={ state.disabled }
								autoFocus
							/>
						</div>
						<div className="happyforms-modal__footer">
							<BaseControl
								help={ <>
										{ __( 'Already know your registration key?', 'happyforms' ) } <Button 
											isLink={ true } 
											onClick={ () => dispatch( { notice: null, step: 'register_key', email: '', } ) } 
											text={ __( 'Jump ahead', 'happyforms' ) } />
									</> }
							>
								<div className="happyforms-modal__footer-button-group">
									<Button 
										isPrimary={ true } 
										onClick={ requestKey } 
										text={ __( 'Send Registration Key', 'happyforms' ) }
										disabled={ state.disabled }
										className="button-hero"
										key="button-request-key"
									/>
								</div>
							</BaseControl>
						</div>
						</>
					);

				case 'register_key':
					return(
						<>
						<div className="happyforms-modal__body">
							<label>{ __( 'Registration key', 'happyforms' ) }</label>
							<div className="hf-pwd">
								<input 
									type="password"
									className="happyforms-credentials-input" 
									value={ state.registrationKey } 
									onChange={ ( e ) => { dispatch( { registrationKey: e.target.value } ) } }
									disabled={ state.disabled }
									autoFocus
								/>
								<button type="button" className="button button-secondary hf-hide-pw hide-if-no-js" data-toggle="0" aria-label={ __( 'Show credentials', 'happyforms' ) }>
									<span className="dashicons dashicons-visibility" aria-hidden="true"></span>
								</button>
							</div>
						</div>
						<div className="happyforms-modal__footer">
							<BaseControl
								help={ state.email !== '' && ( <>
										{ __( 'Still no email?', 'happyforms' ) } <Button 
											isLink={ true } 
											onClick={ requestKey } 
											text={ __( 'Resend', 'happyforms' ) } />
									</> ) } >
								<div className="happyforms-modal__footer-button-group">
									<Button
										isSecondary={ true } 
										onClick={ () => dispatch( { disabled: false, notice: null, step: 'request_key' } ) } 
										text={ __( 'Cancel', 'happyforms' ) }
										disabled={ state.disabled }
										key="button-cancel"
									/>
									<Button
										isPrimary={ true } 
										onClick={ registerKey } 
										text={ __( 'Register', 'happyforms' ) }
										disabled={ state.disabled }
										key="button-register-key"
									/>
								</div>
							</BaseControl>
						</div>
						</>
					);
			}
		};

		return(
			<Guide
				onFinish={ props.onRequestCloseAndRedirect }
				className="happyforms-modal happyforms-modal--subscribe"
				pages={ [
					{
						image: (
							<picture>
								<img src={imageURL} width="450" height="276" />
							</picture>
						),
						content: (
							<>
							{ getNotice() }
							<div className="happyforms-modal__header">
								<h1>{ __( 'You\'re unregistered', 'happyforms' ) }</h1>
								<p>
									{ __( 'To get set up, add your email address below and we’ll send you a registration key. If your membership has expired or your free trial has ended', 'happyforms' ) }, <ExternalLink 
										href="https://happyforms.memberful.com/account/subscriptions">{ __( 'renew immediately to continue', 'happyforms' ) }
										</ExternalLink>
								</p>
							</div>
							{ getStep() }
							</>
						),
					},
				] }
			/>
		);
	}

	const DashboardModalsBaseClass = DashboardModals( $, settings );
	
	class DashboardModalsClass extends DashboardModalsBaseClass {

		openReviewModal( activityCount ) {
			var modal = (
				<ReviewModal 
					activityCount={ activityCount }
					onRequestClose={ this.closeModal.bind( this, 'review-' + activityCount ) }
					onRequestCloseAll={ this.closeModal.bind( this, 'review' ) } />
			);

			this.openModal( modal );
		}

		openSubscribeModal() {
			var modal = (
				<SubscribeModal 
					onRequestCloseAndRedirect={ this.closeSubscribeModalAndRedirect.bind( this ) } 
					onRequestClose={ this.closeModal.bind( this, 'subscribe' ) }
					onRequestCloseAndRemoveBadge={ this.closeSubscribeModalAndRemoveBadge.bind( this ) } />
			);

			this.openModal( modal );
		}

		closeSubscribeModalAndRedirect() {
			window.location.href = settings.dashboardURL;
		}

		closeSubscribeModalAndRemoveBadge() {
			$( '.happyforms-unregistered-badge' ).hide();
			this.closeModal( 'subscribe' );
		}

	};

	var happyForms = window.happyForms || {};
	window.happyForms = happyForms;
	
	happyForms.modals = new DashboardModalsClass();

} )( jQuery, _happyFormsDashboardModalsSettings );