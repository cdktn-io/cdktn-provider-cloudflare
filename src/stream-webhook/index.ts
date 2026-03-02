/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/stream_webhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface StreamWebhookConfig extends cdktn.TerraformMetaArguments {
  /**
  * The account identifier tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/stream_webhook#account_id StreamWebhook#account_id}
  */
  readonly accountId: string;
  /**
  * The URL where webhooks will be sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/stream_webhook#notification_url StreamWebhook#notification_url}
  */
  readonly notificationUrl: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/stream_webhook cloudflare_stream_webhook}
*/
export class StreamWebhook extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudflare_stream_webhook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a StreamWebhook resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StreamWebhook to import
  * @param importFromId The id of the existing StreamWebhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/stream_webhook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StreamWebhook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "cloudflare_stream_webhook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/stream_webhook cloudflare_stream_webhook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StreamWebhookConfig
  */
  public constructor(scope: Construct, id: string, config: StreamWebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudflare_stream_webhook',
      terraformGeneratorMetadata: {
        providerName: 'cloudflare',
        providerVersion: '5.18.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._notificationUrl = config.notificationUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // notification_url - computed: false, optional: false, required: true
  private _notificationUrl?: string; 
  public get notificationUrl() {
    return this.getStringAttribute('notification_url');
  }
  public set notificationUrl(value: string) {
    this._notificationUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationUrlInput() {
    return this._notificationUrl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktn.stringToTerraform(this._accountId),
      notification_url: cdktn.stringToTerraform(this._notificationUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktn.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_url: {
        value: cdktn.stringToHclTerraform(this._notificationUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
