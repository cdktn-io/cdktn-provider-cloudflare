# `zeroTrustCasbIntegration` Submodule <a name="`zeroTrustCasbIntegration` Submodule" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustCasbIntegration <a name="ZeroTrustCasbIntegration" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration cloudflare_zero_trust_casb_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_integration

zeroTrustCasbIntegration.ZeroTrustCasbIntegration(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  name: str,
  paused: bool | IResolvable,
  anthropic: ZeroTrustCasbIntegrationAnthropic = None,
  aws: ZeroTrustCasbIntegrationAws = None,
  box: ZeroTrustCasbIntegrationBox = None,
  dlp_profiles: typing.List[str] = None,
  google_cloud_platform: ZeroTrustCasbIntegrationGoogleCloudPlatform = None,
  google_workspace: ZeroTrustCasbIntegrationGoogleWorkspace = None,
  openai: ZeroTrustCasbIntegrationOpenai = None,
  permissions: typing.List[str] = None,
  use_cases: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Cloudflare account identifier. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the integration. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.Initializer.parameter.paused">paused</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the integration is paused. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.Initializer.parameter.anthropic">anthropic</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropic">ZeroTrustCasbIntegrationAnthropic</a></code> | Anthropic integration configuration. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.Initializer.parameter.aws">aws</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAws">ZeroTrustCasbIntegrationAws</a></code> | AWS integration configuration. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.Initializer.parameter.box">box</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBox">ZeroTrustCasbIntegrationBox</a></code> | Box integration configuration. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.Initializer.parameter.dlpProfiles">dlp_profiles</a></code> | <code>typing.List[str]</code> | DLP profile IDs to associate with the integration. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.Initializer.parameter.googleCloudPlatform">google_cloud_platform</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatform">ZeroTrustCasbIntegrationGoogleCloudPlatform</a></code> | Google Cloud Platform integration configuration. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.Initializer.parameter.googleWorkspace">google_workspace</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspace">ZeroTrustCasbIntegrationGoogleWorkspace</a></code> | Google Workspace integration configuration. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.Initializer.parameter.openai">openai</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenai">ZeroTrustCasbIntegrationOpenai</a></code> | OpenAI integration configuration. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.Initializer.parameter.permissions">permissions</a></code> | <code>typing.List[str]</code> | Permission scopes granted to the integration. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.Initializer.parameter.useCases">use_cases</a></code> | <code>typing.List[str]</code> | Use cases to enroll the integration in. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.Initializer.parameter.accountId"></a>

- *Type:* str

Cloudflare account identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#account_id ZeroTrustCasbIntegration#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.Initializer.parameter.name"></a>

- *Type:* str

Name of the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#name ZeroTrustCasbIntegration#name}

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.Initializer.parameter.paused"></a>

- *Type:* bool | cdktn.IResolvable

Whether the integration is paused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#paused ZeroTrustCasbIntegration#paused}

---

##### `anthropic`<sup>Optional</sup> <a name="anthropic" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.Initializer.parameter.anthropic"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropic">ZeroTrustCasbIntegrationAnthropic</a>

Anthropic integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#anthropic ZeroTrustCasbIntegration#anthropic}

---

##### `aws`<sup>Optional</sup> <a name="aws" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.Initializer.parameter.aws"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAws">ZeroTrustCasbIntegrationAws</a>

AWS integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#aws ZeroTrustCasbIntegration#aws}

---

##### `box`<sup>Optional</sup> <a name="box" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.Initializer.parameter.box"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBox">ZeroTrustCasbIntegrationBox</a>

Box integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#box ZeroTrustCasbIntegration#box}

---

##### `dlp_profiles`<sup>Optional</sup> <a name="dlp_profiles" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.Initializer.parameter.dlpProfiles"></a>

- *Type:* typing.List[str]

DLP profile IDs to associate with the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#dlp_profiles ZeroTrustCasbIntegration#dlp_profiles}

---

##### `google_cloud_platform`<sup>Optional</sup> <a name="google_cloud_platform" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.Initializer.parameter.googleCloudPlatform"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatform">ZeroTrustCasbIntegrationGoogleCloudPlatform</a>

Google Cloud Platform integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#google_cloud_platform ZeroTrustCasbIntegration#google_cloud_platform}

---

##### `google_workspace`<sup>Optional</sup> <a name="google_workspace" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.Initializer.parameter.googleWorkspace"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspace">ZeroTrustCasbIntegrationGoogleWorkspace</a>

Google Workspace integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#google_workspace ZeroTrustCasbIntegration#google_workspace}

---

##### `openai`<sup>Optional</sup> <a name="openai" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.Initializer.parameter.openai"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenai">ZeroTrustCasbIntegrationOpenai</a>

OpenAI integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#openai ZeroTrustCasbIntegration#openai}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.Initializer.parameter.permissions"></a>

- *Type:* typing.List[str]

Permission scopes granted to the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#permissions ZeroTrustCasbIntegration#permissions}

---

##### `use_cases`<sup>Optional</sup> <a name="use_cases" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.Initializer.parameter.useCases"></a>

- *Type:* typing.List[str]

Use cases to enroll the integration in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#use_cases ZeroTrustCasbIntegration#use_cases}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.putAnthropic">put_anthropic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.putAws">put_aws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.putBox">put_box</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.putGoogleCloudPlatform">put_google_cloud_platform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.putGoogleWorkspace">put_google_workspace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.putOpenai">put_openai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.resetAnthropic">reset_anthropic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.resetAws">reset_aws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.resetBox">reset_box</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.resetDlpProfiles">reset_dlp_profiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.resetGoogleCloudPlatform">reset_google_cloud_platform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.resetGoogleWorkspace">reset_google_workspace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.resetOpenai">reset_openai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.resetPermissions">reset_permissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.resetUseCases">reset_use_cases</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_anthropic` <a name="put_anthropic" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.putAnthropic"></a>

```python
def put_anthropic(
  anthropic_admin_api_key: ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKey = None,
  anthropic_compliance_api_key: ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKey = None,
  anthropic_workspace_api_key: ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKey = None
) -> None
```

###### `anthropic_admin_api_key`<sup>Optional</sup> <a name="anthropic_admin_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.putAnthropic.parameter.anthropicAdminApiKey"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKey">ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKey</a>

Authenticate with an Anthropic Admin API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#anthropic_admin_api_key ZeroTrustCasbIntegration#anthropic_admin_api_key}

---

###### `anthropic_compliance_api_key`<sup>Optional</sup> <a name="anthropic_compliance_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.putAnthropic.parameter.anthropicComplianceApiKey"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKey">ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKey</a>

Authenticate with an Anthropic Compliance API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#anthropic_compliance_api_key ZeroTrustCasbIntegration#anthropic_compliance_api_key}

---

###### `anthropic_workspace_api_key`<sup>Optional</sup> <a name="anthropic_workspace_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.putAnthropic.parameter.anthropicWorkspaceApiKey"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKey">ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKey</a>

Authenticate with an Anthropic Workspace API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#anthropic_workspace_api_key ZeroTrustCasbIntegration#anthropic_workspace_api_key}

---

##### `put_aws` <a name="put_aws" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.putAws"></a>

```python
def put_aws(
  aws_iam_role: ZeroTrustCasbIntegrationAwsAwsIamRole = None
) -> None
```

###### `aws_iam_role`<sup>Optional</sup> <a name="aws_iam_role" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.putAws.parameter.awsIamRole"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRole">ZeroTrustCasbIntegrationAwsAwsIamRole</a>

Authenticate by delegating to a cross-account IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#aws_iam_role ZeroTrustCasbIntegration#aws_iam_role}

---

##### `put_box` <a name="put_box" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.putBox"></a>

```python
def put_box(
  box_server_authentication: ZeroTrustCasbIntegrationBoxBoxServerAuthentication = None
) -> None
```

###### `box_server_authentication`<sup>Optional</sup> <a name="box_server_authentication" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.putBox.parameter.boxServerAuthentication"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthentication">ZeroTrustCasbIntegrationBoxBoxServerAuthentication</a>

Authenticate with Box server authentication.

Before creating the integration, add the Cloudflare CASB application in Box Admin Console > Integrations > Platform Apps Manager > Server Authentication Apps using client ID `puaghckpy0578r8p6f3g0rf860unup4r`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#box_server_authentication ZeroTrustCasbIntegration#box_server_authentication}

---

##### `put_google_cloud_platform` <a name="put_google_cloud_platform" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.putGoogleCloudPlatform"></a>

```python
def put_google_cloud_platform(
  google_cloud_platform_service_account: ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccount = None
) -> None
```

###### `google_cloud_platform_service_account`<sup>Optional</sup> <a name="google_cloud_platform_service_account" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.putGoogleCloudPlatform.parameter.googleCloudPlatformServiceAccount"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccount">ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccount</a>

Authenticate with a service account key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#google_cloud_platform_service_account ZeroTrustCasbIntegration#google_cloud_platform_service_account}

---

##### `put_google_workspace` <a name="put_google_workspace" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.putGoogleWorkspace"></a>

```python
def put_google_workspace(
  google_domain_wide_delegation_service_account: ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccount = None
) -> None
```

###### `google_domain_wide_delegation_service_account`<sup>Optional</sup> <a name="google_domain_wide_delegation_service_account" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.putGoogleWorkspace.parameter.googleDomainWideDelegationServiceAccount"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccount">ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccount</a>

Authenticate with a service account granted domain-wide delegation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#google_domain_wide_delegation_service_account ZeroTrustCasbIntegration#google_domain_wide_delegation_service_account}

---

##### `put_openai` <a name="put_openai" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.putOpenai"></a>

```python
def put_openai(
  chatgpt_compliance_api_key: ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKey = None,
  chatgpt_standard_api_key: ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKey = None
) -> None
```

###### `chatgpt_compliance_api_key`<sup>Optional</sup> <a name="chatgpt_compliance_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.putOpenai.parameter.chatgptComplianceApiKey"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKey">ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKey</a>

Authenticate with an OpenAI Compliance API key. Requires an Enterprise plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#chatgpt_compliance_api_key ZeroTrustCasbIntegration#chatgpt_compliance_api_key}

---

###### `chatgpt_standard_api_key`<sup>Optional</sup> <a name="chatgpt_standard_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.putOpenai.parameter.chatgptStandardApiKey"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKey">ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKey</a>

Authenticate with an OpenAI Admin API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#chatgpt_standard_api_key ZeroTrustCasbIntegration#chatgpt_standard_api_key}

---

##### `reset_anthropic` <a name="reset_anthropic" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.resetAnthropic"></a>

```python
def reset_anthropic() -> None
```

##### `reset_aws` <a name="reset_aws" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.resetAws"></a>

```python
def reset_aws() -> None
```

##### `reset_box` <a name="reset_box" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.resetBox"></a>

```python
def reset_box() -> None
```

##### `reset_dlp_profiles` <a name="reset_dlp_profiles" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.resetDlpProfiles"></a>

```python
def reset_dlp_profiles() -> None
```

##### `reset_google_cloud_platform` <a name="reset_google_cloud_platform" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.resetGoogleCloudPlatform"></a>

```python
def reset_google_cloud_platform() -> None
```

##### `reset_google_workspace` <a name="reset_google_workspace" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.resetGoogleWorkspace"></a>

```python
def reset_google_workspace() -> None
```

##### `reset_openai` <a name="reset_openai" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.resetOpenai"></a>

```python
def reset_openai() -> None
```

##### `reset_permissions` <a name="reset_permissions" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.resetPermissions"></a>

```python
def reset_permissions() -> None
```

##### `reset_use_cases` <a name="reset_use_cases" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.resetUseCases"></a>

```python
def reset_use_cases() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ZeroTrustCasbIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.isConstruct"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_integration

zeroTrustCasbIntegration.ZeroTrustCasbIntegration.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_integration

zeroTrustCasbIntegration.ZeroTrustCasbIntegration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.isTerraformResource"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_integration

zeroTrustCasbIntegration.ZeroTrustCasbIntegration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_integration

zeroTrustCasbIntegration.ZeroTrustCasbIntegration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ZeroTrustCasbIntegration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ZeroTrustCasbIntegration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ZeroTrustCasbIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustCasbIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.anthropic">anthropic</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference">ZeroTrustCasbIntegrationAnthropicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.aws">aws</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference">ZeroTrustCasbIntegrationAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.box">box</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference">ZeroTrustCasbIntegrationBoxOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.googleCloudPlatform">google_cloud_platform</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference">ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.googleWorkspace">google_workspace</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference">ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.openai">openai</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference">ZeroTrustCasbIntegrationOpenaiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.secretsDigest">secrets_digest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.anthropicInput">anthropic_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropic">ZeroTrustCasbIntegrationAnthropic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.awsInput">aws_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAws">ZeroTrustCasbIntegrationAws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.boxInput">box_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBox">ZeroTrustCasbIntegrationBox</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.dlpProfilesInput">dlp_profiles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.googleCloudPlatformInput">google_cloud_platform_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatform">ZeroTrustCasbIntegrationGoogleCloudPlatform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.googleWorkspaceInput">google_workspace_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspace">ZeroTrustCasbIntegrationGoogleWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.openaiInput">openai_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenai">ZeroTrustCasbIntegrationOpenai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.pausedInput">paused_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.permissionsInput">permissions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.useCasesInput">use_cases_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.dlpProfiles">dlp_profiles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.paused">paused</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.useCases">use_cases</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `anthropic`<sup>Required</sup> <a name="anthropic" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.anthropic"></a>

```python
anthropic: ZeroTrustCasbIntegrationAnthropicOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference">ZeroTrustCasbIntegrationAnthropicOutputReference</a>

---

##### `aws`<sup>Required</sup> <a name="aws" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.aws"></a>

```python
aws: ZeroTrustCasbIntegrationAwsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference">ZeroTrustCasbIntegrationAwsOutputReference</a>

---

##### `box`<sup>Required</sup> <a name="box" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.box"></a>

```python
box: ZeroTrustCasbIntegrationBoxOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference">ZeroTrustCasbIntegrationBoxOutputReference</a>

---

##### `google_cloud_platform`<sup>Required</sup> <a name="google_cloud_platform" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.googleCloudPlatform"></a>

```python
google_cloud_platform: ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference">ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference</a>

---

##### `google_workspace`<sup>Required</sup> <a name="google_workspace" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.googleWorkspace"></a>

```python
google_workspace: ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference">ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `openai`<sup>Required</sup> <a name="openai" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.openai"></a>

```python
openai: ZeroTrustCasbIntegrationOpenaiOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference">ZeroTrustCasbIntegrationOpenaiOutputReference</a>

---

##### `secrets_digest`<sup>Required</sup> <a name="secrets_digest" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.secretsDigest"></a>

```python
secrets_digest: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `anthropic_input`<sup>Optional</sup> <a name="anthropic_input" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.anthropicInput"></a>

```python
anthropic_input: IResolvable | ZeroTrustCasbIntegrationAnthropic
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropic">ZeroTrustCasbIntegrationAnthropic</a>

---

##### `aws_input`<sup>Optional</sup> <a name="aws_input" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.awsInput"></a>

```python
aws_input: IResolvable | ZeroTrustCasbIntegrationAws
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAws">ZeroTrustCasbIntegrationAws</a>

---

##### `box_input`<sup>Optional</sup> <a name="box_input" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.boxInput"></a>

```python
box_input: IResolvable | ZeroTrustCasbIntegrationBox
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBox">ZeroTrustCasbIntegrationBox</a>

---

##### `dlp_profiles_input`<sup>Optional</sup> <a name="dlp_profiles_input" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.dlpProfilesInput"></a>

```python
dlp_profiles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `google_cloud_platform_input`<sup>Optional</sup> <a name="google_cloud_platform_input" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.googleCloudPlatformInput"></a>

```python
google_cloud_platform_input: IResolvable | ZeroTrustCasbIntegrationGoogleCloudPlatform
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatform">ZeroTrustCasbIntegrationGoogleCloudPlatform</a>

---

##### `google_workspace_input`<sup>Optional</sup> <a name="google_workspace_input" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.googleWorkspaceInput"></a>

```python
google_workspace_input: IResolvable | ZeroTrustCasbIntegrationGoogleWorkspace
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspace">ZeroTrustCasbIntegrationGoogleWorkspace</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `openai_input`<sup>Optional</sup> <a name="openai_input" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.openaiInput"></a>

```python
openai_input: IResolvable | ZeroTrustCasbIntegrationOpenai
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenai">ZeroTrustCasbIntegrationOpenai</a>

---

##### `paused_input`<sup>Optional</sup> <a name="paused_input" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.pausedInput"></a>

```python
paused_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.permissionsInput"></a>

```python
permissions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `use_cases_input`<sup>Optional</sup> <a name="use_cases_input" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.useCasesInput"></a>

```python
use_cases_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `dlp_profiles`<sup>Required</sup> <a name="dlp_profiles" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.dlpProfiles"></a>

```python
dlp_profiles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.paused"></a>

```python
paused: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `use_cases`<sup>Required</sup> <a name="use_cases" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.useCases"></a>

```python
use_cases: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustCasbIntegrationAnthropic <a name="ZeroTrustCasbIntegrationAnthropic" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropic.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_integration

zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropic(
  anthropic_admin_api_key: ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKey = None,
  anthropic_compliance_api_key: ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKey = None,
  anthropic_workspace_api_key: ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKey = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropic.property.anthropicAdminApiKey">anthropic_admin_api_key</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKey">ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKey</a></code> | Authenticate with an Anthropic Admin API key. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropic.property.anthropicComplianceApiKey">anthropic_compliance_api_key</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKey">ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKey</a></code> | Authenticate with an Anthropic Compliance API key. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropic.property.anthropicWorkspaceApiKey">anthropic_workspace_api_key</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKey">ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKey</a></code> | Authenticate with an Anthropic Workspace API key. |

---

##### `anthropic_admin_api_key`<sup>Optional</sup> <a name="anthropic_admin_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropic.property.anthropicAdminApiKey"></a>

```python
anthropic_admin_api_key: ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKey
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKey">ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKey</a>

Authenticate with an Anthropic Admin API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#anthropic_admin_api_key ZeroTrustCasbIntegration#anthropic_admin_api_key}

---

##### `anthropic_compliance_api_key`<sup>Optional</sup> <a name="anthropic_compliance_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropic.property.anthropicComplianceApiKey"></a>

```python
anthropic_compliance_api_key: ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKey
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKey">ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKey</a>

Authenticate with an Anthropic Compliance API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#anthropic_compliance_api_key ZeroTrustCasbIntegration#anthropic_compliance_api_key}

---

##### `anthropic_workspace_api_key`<sup>Optional</sup> <a name="anthropic_workspace_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropic.property.anthropicWorkspaceApiKey"></a>

```python
anthropic_workspace_api_key: ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKey
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKey">ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKey</a>

Authenticate with an Anthropic Workspace API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#anthropic_workspace_api_key ZeroTrustCasbIntegration#anthropic_workspace_api_key}

---

### ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKey <a name="ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKey" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKey.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_integration

zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKey(
  api_key: str,
  tenant_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKey.property.apiKey">api_key</a></code> | <code>str</code> | Anthropic Admin API key. This value is write-only and is never persisted to Terraform state. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKey.property.tenantId">tenant_id</a></code> | <code>str</code> | Organization ID. Auto-extracted from the key if not provided. |

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKey.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

Anthropic Admin API key. This value is write-only and is never persisted to Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#api_key ZeroTrustCasbIntegration#api_key}

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKey.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Organization ID. Auto-extracted from the key if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#tenant_id ZeroTrustCasbIntegration#tenant_id}

---

### ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKey <a name="ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKey" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKey.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_integration

zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKey(
  compliance_api_key: str,
  tenant_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKey.property.complianceApiKey">compliance_api_key</a></code> | <code>str</code> | Anthropic Compliance API key. This value is write-only and is never persisted to Terraform state. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKey.property.tenantId">tenant_id</a></code> | <code>str</code> | Organization ID. Auto-extracted from the key if not provided. |

---

##### `compliance_api_key`<sup>Required</sup> <a name="compliance_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKey.property.complianceApiKey"></a>

```python
compliance_api_key: str
```

- *Type:* str

Anthropic Compliance API key. This value is write-only and is never persisted to Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#compliance_api_key ZeroTrustCasbIntegration#compliance_api_key}

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKey.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Organization ID. Auto-extracted from the key if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#tenant_id ZeroTrustCasbIntegration#tenant_id}

---

### ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKey <a name="ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKey" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKey.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_integration

zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKey(
  api_key: str,
  tenant_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKey.property.apiKey">api_key</a></code> | <code>str</code> | Anthropic Workspace API key. This value is write-only and is never persisted to Terraform state. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKey.property.tenantId">tenant_id</a></code> | <code>str</code> | Workspace ID, found in the Anthropic Console URL after /workspaces/. |

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKey.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

Anthropic Workspace API key. This value is write-only and is never persisted to Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#api_key ZeroTrustCasbIntegration#api_key}

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKey.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Workspace ID, found in the Anthropic Console URL after /workspaces/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#tenant_id ZeroTrustCasbIntegration#tenant_id}

---

### ZeroTrustCasbIntegrationAws <a name="ZeroTrustCasbIntegrationAws" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAws"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAws.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_integration

zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAws(
  aws_iam_role: ZeroTrustCasbIntegrationAwsAwsIamRole = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAws.property.awsIamRole">aws_iam_role</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRole">ZeroTrustCasbIntegrationAwsAwsIamRole</a></code> | Authenticate by delegating to a cross-account IAM role. |

---

##### `aws_iam_role`<sup>Optional</sup> <a name="aws_iam_role" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAws.property.awsIamRole"></a>

```python
aws_iam_role: ZeroTrustCasbIntegrationAwsAwsIamRole
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRole">ZeroTrustCasbIntegrationAwsAwsIamRole</a>

Authenticate by delegating to a cross-account IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#aws_iam_role ZeroTrustCasbIntegration#aws_iam_role}

---

### ZeroTrustCasbIntegrationAwsAwsIamRole <a name="ZeroTrustCasbIntegrationAwsAwsIamRole" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRole.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_integration

zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRole(
  external_id: str,
  role_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRole.property.externalId">external_id</a></code> | <code>str</code> | External ID required when assuming the IAM role. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRole.property.roleArn">role_arn</a></code> | <code>str</code> | ARN of the cross-account IAM role Cloudflare will assume. |

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRole.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

External ID required when assuming the IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#external_id ZeroTrustCasbIntegration#external_id}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRole.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

ARN of the cross-account IAM role Cloudflare will assume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#role_arn ZeroTrustCasbIntegration#role_arn}

---

### ZeroTrustCasbIntegrationBox <a name="ZeroTrustCasbIntegrationBox" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBox"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBox.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_integration

zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBox(
  box_server_authentication: ZeroTrustCasbIntegrationBoxBoxServerAuthentication = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBox.property.boxServerAuthentication">box_server_authentication</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthentication">ZeroTrustCasbIntegrationBoxBoxServerAuthentication</a></code> | Authenticate with Box server authentication. |

---

##### `box_server_authentication`<sup>Optional</sup> <a name="box_server_authentication" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBox.property.boxServerAuthentication"></a>

```python
box_server_authentication: ZeroTrustCasbIntegrationBoxBoxServerAuthentication
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthentication">ZeroTrustCasbIntegrationBoxBoxServerAuthentication</a>

Authenticate with Box server authentication.

Before creating the integration, add the Cloudflare CASB application in Box Admin Console > Integrations > Platform Apps Manager > Server Authentication Apps using client ID `puaghckpy0578r8p6f3g0rf860unup4r`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#box_server_authentication ZeroTrustCasbIntegration#box_server_authentication}

---

### ZeroTrustCasbIntegrationBoxBoxServerAuthentication <a name="ZeroTrustCasbIntegrationBoxBoxServerAuthentication" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthentication.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_integration

zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthentication(
  enterprise_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthentication.property.enterpriseId">enterprise_id</a></code> | <code>str</code> | Box Enterprise ID from Admin Console > Accounts & Billing. |

---

##### `enterprise_id`<sup>Required</sup> <a name="enterprise_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthentication.property.enterpriseId"></a>

```python
enterprise_id: str
```

- *Type:* str

Box Enterprise ID from Admin Console > Accounts & Billing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#enterprise_id ZeroTrustCasbIntegration#enterprise_id}

---

### ZeroTrustCasbIntegrationConfig <a name="ZeroTrustCasbIntegrationConfig" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_integration

zeroTrustCasbIntegration.ZeroTrustCasbIntegrationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  name: str,
  paused: bool | IResolvable,
  anthropic: ZeroTrustCasbIntegrationAnthropic = None,
  aws: ZeroTrustCasbIntegrationAws = None,
  box: ZeroTrustCasbIntegrationBox = None,
  dlp_profiles: typing.List[str] = None,
  google_cloud_platform: ZeroTrustCasbIntegrationGoogleCloudPlatform = None,
  google_workspace: ZeroTrustCasbIntegrationGoogleWorkspace = None,
  openai: ZeroTrustCasbIntegrationOpenai = None,
  permissions: typing.List[str] = None,
  use_cases: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationConfig.property.accountId">account_id</a></code> | <code>str</code> | Cloudflare account identifier. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationConfig.property.name">name</a></code> | <code>str</code> | Name of the integration. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationConfig.property.paused">paused</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the integration is paused. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationConfig.property.anthropic">anthropic</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropic">ZeroTrustCasbIntegrationAnthropic</a></code> | Anthropic integration configuration. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationConfig.property.aws">aws</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAws">ZeroTrustCasbIntegrationAws</a></code> | AWS integration configuration. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationConfig.property.box">box</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBox">ZeroTrustCasbIntegrationBox</a></code> | Box integration configuration. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationConfig.property.dlpProfiles">dlp_profiles</a></code> | <code>typing.List[str]</code> | DLP profile IDs to associate with the integration. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationConfig.property.googleCloudPlatform">google_cloud_platform</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatform">ZeroTrustCasbIntegrationGoogleCloudPlatform</a></code> | Google Cloud Platform integration configuration. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationConfig.property.googleWorkspace">google_workspace</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspace">ZeroTrustCasbIntegrationGoogleWorkspace</a></code> | Google Workspace integration configuration. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationConfig.property.openai">openai</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenai">ZeroTrustCasbIntegrationOpenai</a></code> | OpenAI integration configuration. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationConfig.property.permissions">permissions</a></code> | <code>typing.List[str]</code> | Permission scopes granted to the integration. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationConfig.property.useCases">use_cases</a></code> | <code>typing.List[str]</code> | Use cases to enroll the integration in. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Cloudflare account identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#account_id ZeroTrustCasbIntegration#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#name ZeroTrustCasbIntegration#name}

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationConfig.property.paused"></a>

```python
paused: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the integration is paused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#paused ZeroTrustCasbIntegration#paused}

---

##### `anthropic`<sup>Optional</sup> <a name="anthropic" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationConfig.property.anthropic"></a>

```python
anthropic: ZeroTrustCasbIntegrationAnthropic
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropic">ZeroTrustCasbIntegrationAnthropic</a>

Anthropic integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#anthropic ZeroTrustCasbIntegration#anthropic}

---

##### `aws`<sup>Optional</sup> <a name="aws" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationConfig.property.aws"></a>

```python
aws: ZeroTrustCasbIntegrationAws
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAws">ZeroTrustCasbIntegrationAws</a>

AWS integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#aws ZeroTrustCasbIntegration#aws}

---

##### `box`<sup>Optional</sup> <a name="box" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationConfig.property.box"></a>

```python
box: ZeroTrustCasbIntegrationBox
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBox">ZeroTrustCasbIntegrationBox</a>

Box integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#box ZeroTrustCasbIntegration#box}

---

##### `dlp_profiles`<sup>Optional</sup> <a name="dlp_profiles" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationConfig.property.dlpProfiles"></a>

```python
dlp_profiles: typing.List[str]
```

- *Type:* typing.List[str]

DLP profile IDs to associate with the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#dlp_profiles ZeroTrustCasbIntegration#dlp_profiles}

---

##### `google_cloud_platform`<sup>Optional</sup> <a name="google_cloud_platform" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationConfig.property.googleCloudPlatform"></a>

```python
google_cloud_platform: ZeroTrustCasbIntegrationGoogleCloudPlatform
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatform">ZeroTrustCasbIntegrationGoogleCloudPlatform</a>

Google Cloud Platform integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#google_cloud_platform ZeroTrustCasbIntegration#google_cloud_platform}

---

##### `google_workspace`<sup>Optional</sup> <a name="google_workspace" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationConfig.property.googleWorkspace"></a>

```python
google_workspace: ZeroTrustCasbIntegrationGoogleWorkspace
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspace">ZeroTrustCasbIntegrationGoogleWorkspace</a>

Google Workspace integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#google_workspace ZeroTrustCasbIntegration#google_workspace}

---

##### `openai`<sup>Optional</sup> <a name="openai" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationConfig.property.openai"></a>

```python
openai: ZeroTrustCasbIntegrationOpenai
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenai">ZeroTrustCasbIntegrationOpenai</a>

OpenAI integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#openai ZeroTrustCasbIntegration#openai}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationConfig.property.permissions"></a>

```python
permissions: typing.List[str]
```

- *Type:* typing.List[str]

Permission scopes granted to the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#permissions ZeroTrustCasbIntegration#permissions}

---

##### `use_cases`<sup>Optional</sup> <a name="use_cases" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationConfig.property.useCases"></a>

```python
use_cases: typing.List[str]
```

- *Type:* typing.List[str]

Use cases to enroll the integration in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#use_cases ZeroTrustCasbIntegration#use_cases}

---

### ZeroTrustCasbIntegrationGoogleCloudPlatform <a name="ZeroTrustCasbIntegrationGoogleCloudPlatform" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatform"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatform.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_integration

zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatform(
  google_cloud_platform_service_account: ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccount = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatform.property.googleCloudPlatformServiceAccount">google_cloud_platform_service_account</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccount">ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccount</a></code> | Authenticate with a service account key. |

---

##### `google_cloud_platform_service_account`<sup>Optional</sup> <a name="google_cloud_platform_service_account" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatform.property.googleCloudPlatformServiceAccount"></a>

```python
google_cloud_platform_service_account: ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccount
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccount">ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccount</a>

Authenticate with a service account key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#google_cloud_platform_service_account ZeroTrustCasbIntegration#google_cloud_platform_service_account}

---

### ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccount <a name="ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccount" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccount.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_integration

zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccount(
  service_account_key_json: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccount.property.serviceAccountKeyJson">service_account_key_json</a></code> | <code>str</code> | Contents of a Google service account JSON key file. |

---

##### `service_account_key_json`<sup>Required</sup> <a name="service_account_key_json" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccount.property.serviceAccountKeyJson"></a>

```python
service_account_key_json: str
```

- *Type:* str

Contents of a Google service account JSON key file.

This value is write-only and is never persisted to Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#service_account_key_json ZeroTrustCasbIntegration#service_account_key_json}

---

### ZeroTrustCasbIntegrationGoogleWorkspace <a name="ZeroTrustCasbIntegrationGoogleWorkspace" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspace.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_integration

zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspace(
  google_domain_wide_delegation_service_account: ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccount = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspace.property.googleDomainWideDelegationServiceAccount">google_domain_wide_delegation_service_account</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccount">ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccount</a></code> | Authenticate with a service account granted domain-wide delegation. |

---

##### `google_domain_wide_delegation_service_account`<sup>Optional</sup> <a name="google_domain_wide_delegation_service_account" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspace.property.googleDomainWideDelegationServiceAccount"></a>

```python
google_domain_wide_delegation_service_account: ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccount
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccount">ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccount</a>

Authenticate with a service account granted domain-wide delegation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#google_domain_wide_delegation_service_account ZeroTrustCasbIntegration#google_domain_wide_delegation_service_account}

---

### ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccount <a name="ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccount" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccount.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_integration

zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccount(
  administrator_email: str,
  service_account_key_json: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccount.property.administratorEmail">administrator_email</a></code> | <code>str</code> | A Google Workspace super administrator email address. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccount.property.serviceAccountKeyJson">service_account_key_json</a></code> | <code>str</code> | Contents of a Google service account JSON key file. |

---

##### `administrator_email`<sup>Required</sup> <a name="administrator_email" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccount.property.administratorEmail"></a>

```python
administrator_email: str
```

- *Type:* str

A Google Workspace super administrator email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#administrator_email ZeroTrustCasbIntegration#administrator_email}

---

##### `service_account_key_json`<sup>Required</sup> <a name="service_account_key_json" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccount.property.serviceAccountKeyJson"></a>

```python
service_account_key_json: str
```

- *Type:* str

Contents of a Google service account JSON key file.

This value is write-only and is never persisted to Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#service_account_key_json ZeroTrustCasbIntegration#service_account_key_json}

---

### ZeroTrustCasbIntegrationOpenai <a name="ZeroTrustCasbIntegrationOpenai" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenai"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenai.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_integration

zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenai(
  chatgpt_compliance_api_key: ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKey = None,
  chatgpt_standard_api_key: ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKey = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenai.property.chatgptComplianceApiKey">chatgpt_compliance_api_key</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKey">ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKey</a></code> | Authenticate with an OpenAI Compliance API key. Requires an Enterprise plan. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenai.property.chatgptStandardApiKey">chatgpt_standard_api_key</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKey">ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKey</a></code> | Authenticate with an OpenAI Admin API key. |

---

##### `chatgpt_compliance_api_key`<sup>Optional</sup> <a name="chatgpt_compliance_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenai.property.chatgptComplianceApiKey"></a>

```python
chatgpt_compliance_api_key: ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKey
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKey">ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKey</a>

Authenticate with an OpenAI Compliance API key. Requires an Enterprise plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#chatgpt_compliance_api_key ZeroTrustCasbIntegration#chatgpt_compliance_api_key}

---

##### `chatgpt_standard_api_key`<sup>Optional</sup> <a name="chatgpt_standard_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenai.property.chatgptStandardApiKey"></a>

```python
chatgpt_standard_api_key: ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKey
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKey">ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKey</a>

Authenticate with an OpenAI Admin API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#chatgpt_standard_api_key ZeroTrustCasbIntegration#chatgpt_standard_api_key}

---

### ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKey <a name="ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKey" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKey.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_integration

zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKey(
  admin_api_key: str,
  compliance_api_key: str,
  organization_id: str,
  workspace_id: str,
  project_api_key: str = None,
  project_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKey.property.adminApiKey">admin_api_key</a></code> | <code>str</code> | OpenAI Admin API key with api.management.read access. This value is write-only and is never persisted to Terraform state. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKey.property.complianceApiKey">compliance_api_key</a></code> | <code>str</code> | OpenAI Compliance API key for audit logs. This value is write-only and is never persisted to Terraform state. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKey.property.organizationId">organization_id</a></code> | <code>str</code> | OpenAI Organization ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKey.property.workspaceId">workspace_id</a></code> | <code>str</code> | OpenAI Workspace ID for compliance data. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKey.property.projectApiKey">project_api_key</a></code> | <code>str</code> | OpenAI Project API key, used for DLP. This value is write-only and is never persisted to Terraform state. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKey.property.projectId">project_id</a></code> | <code>str</code> | OpenAI Project ID, used for DLP. |

---

##### `admin_api_key`<sup>Required</sup> <a name="admin_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKey.property.adminApiKey"></a>

```python
admin_api_key: str
```

- *Type:* str

OpenAI Admin API key with api.management.read access. This value is write-only and is never persisted to Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#admin_api_key ZeroTrustCasbIntegration#admin_api_key}

---

##### `compliance_api_key`<sup>Required</sup> <a name="compliance_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKey.property.complianceApiKey"></a>

```python
compliance_api_key: str
```

- *Type:* str

OpenAI Compliance API key for audit logs. This value is write-only and is never persisted to Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#compliance_api_key ZeroTrustCasbIntegration#compliance_api_key}

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKey.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

OpenAI Organization ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#organization_id ZeroTrustCasbIntegration#organization_id}

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKey.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

OpenAI Workspace ID for compliance data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#workspace_id ZeroTrustCasbIntegration#workspace_id}

---

##### `project_api_key`<sup>Optional</sup> <a name="project_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKey.property.projectApiKey"></a>

```python
project_api_key: str
```

- *Type:* str

OpenAI Project API key, used for DLP. This value is write-only and is never persisted to Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#project_api_key ZeroTrustCasbIntegration#project_api_key}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKey.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

OpenAI Project ID, used for DLP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#project_id ZeroTrustCasbIntegration#project_id}

---

### ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKey <a name="ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKey" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKey.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_integration

zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKey(
  admin_api_key: str,
  organization_id: str,
  project_api_key: str = None,
  project_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKey.property.adminApiKey">admin_api_key</a></code> | <code>str</code> | OpenAI Admin API key with api.management.read access. This value is write-only and is never persisted to Terraform state. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKey.property.organizationId">organization_id</a></code> | <code>str</code> | OpenAI Organization ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKey.property.projectApiKey">project_api_key</a></code> | <code>str</code> | OpenAI Project API key, used for DLP. This value is write-only and is never persisted to Terraform state. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKey.property.projectId">project_id</a></code> | <code>str</code> | OpenAI Project ID, used for DLP. |

---

##### `admin_api_key`<sup>Required</sup> <a name="admin_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKey.property.adminApiKey"></a>

```python
admin_api_key: str
```

- *Type:* str

OpenAI Admin API key with api.management.read access. This value is write-only and is never persisted to Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#admin_api_key ZeroTrustCasbIntegration#admin_api_key}

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKey.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

OpenAI Organization ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#organization_id ZeroTrustCasbIntegration#organization_id}

---

##### `project_api_key`<sup>Optional</sup> <a name="project_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKey.property.projectApiKey"></a>

```python
project_api_key: str
```

- *Type:* str

OpenAI Project API key, used for DLP. This value is write-only and is never persisted to Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#project_api_key ZeroTrustCasbIntegration#project_api_key}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKey.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

OpenAI Project ID, used for DLP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#project_id ZeroTrustCasbIntegration#project_id}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference <a name="ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_integration

zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.resetTenantId">reset_tenant_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tenant_id` <a name="reset_tenant_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.property.apiKeyInput">api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.property.apiKey">api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKey">ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_input`<sup>Optional</sup> <a name="api_key_input" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.property.apiKeyInput"></a>

```python
api_key_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### ~~`api_key`~~<sup>Required</sup> <a name="api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.property.apiKey"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```python
api_key: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKey">ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKey</a>

---


### ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference <a name="ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_integration

zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.resetTenantId">reset_tenant_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tenant_id` <a name="reset_tenant_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.property.complianceApiKeyInput">compliance_api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.property.complianceApiKey">compliance_api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKey">ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compliance_api_key_input`<sup>Optional</sup> <a name="compliance_api_key_input" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.property.complianceApiKeyInput"></a>

```python
compliance_api_key_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### ~~`compliance_api_key`~~<sup>Required</sup> <a name="compliance_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.property.complianceApiKey"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```python
compliance_api_key: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKey">ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKey</a>

---


### ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference <a name="ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_integration

zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.property.apiKeyInput">api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.property.apiKey">api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKey">ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_key_input`<sup>Optional</sup> <a name="api_key_input" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.property.apiKeyInput"></a>

```python
api_key_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### ~~`api_key`~~<sup>Required</sup> <a name="api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.property.apiKey"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```python
api_key: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKey">ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKey</a>

---


### ZeroTrustCasbIntegrationAnthropicOutputReference <a name="ZeroTrustCasbIntegrationAnthropicOutputReference" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_integration

zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.putAnthropicAdminApiKey">put_anthropic_admin_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.putAnthropicComplianceApiKey">put_anthropic_compliance_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.putAnthropicWorkspaceApiKey">put_anthropic_workspace_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.resetAnthropicAdminApiKey">reset_anthropic_admin_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.resetAnthropicComplianceApiKey">reset_anthropic_compliance_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.resetAnthropicWorkspaceApiKey">reset_anthropic_workspace_api_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_anthropic_admin_api_key` <a name="put_anthropic_admin_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.putAnthropicAdminApiKey"></a>

```python
def put_anthropic_admin_api_key(
  api_key: str,
  tenant_id: str = None
) -> None
```

###### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.putAnthropicAdminApiKey.parameter.apiKey"></a>

- *Type:* str

Anthropic Admin API key. This value is write-only and is never persisted to Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#api_key ZeroTrustCasbIntegration#api_key}

---

###### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.putAnthropicAdminApiKey.parameter.tenantId"></a>

- *Type:* str

Organization ID. Auto-extracted from the key if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#tenant_id ZeroTrustCasbIntegration#tenant_id}

---

##### `put_anthropic_compliance_api_key` <a name="put_anthropic_compliance_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.putAnthropicComplianceApiKey"></a>

```python
def put_anthropic_compliance_api_key(
  compliance_api_key: str,
  tenant_id: str = None
) -> None
```

###### `compliance_api_key`<sup>Required</sup> <a name="compliance_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.putAnthropicComplianceApiKey.parameter.complianceApiKey"></a>

- *Type:* str

Anthropic Compliance API key. This value is write-only and is never persisted to Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#compliance_api_key ZeroTrustCasbIntegration#compliance_api_key}

---

###### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.putAnthropicComplianceApiKey.parameter.tenantId"></a>

- *Type:* str

Organization ID. Auto-extracted from the key if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#tenant_id ZeroTrustCasbIntegration#tenant_id}

---

##### `put_anthropic_workspace_api_key` <a name="put_anthropic_workspace_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.putAnthropicWorkspaceApiKey"></a>

```python
def put_anthropic_workspace_api_key(
  api_key: str,
  tenant_id: str
) -> None
```

###### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.putAnthropicWorkspaceApiKey.parameter.apiKey"></a>

- *Type:* str

Anthropic Workspace API key. This value is write-only and is never persisted to Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#api_key ZeroTrustCasbIntegration#api_key}

---

###### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.putAnthropicWorkspaceApiKey.parameter.tenantId"></a>

- *Type:* str

Workspace ID, found in the Anthropic Console URL after /workspaces/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#tenant_id ZeroTrustCasbIntegration#tenant_id}

---

##### `reset_anthropic_admin_api_key` <a name="reset_anthropic_admin_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.resetAnthropicAdminApiKey"></a>

```python
def reset_anthropic_admin_api_key() -> None
```

##### `reset_anthropic_compliance_api_key` <a name="reset_anthropic_compliance_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.resetAnthropicComplianceApiKey"></a>

```python
def reset_anthropic_compliance_api_key() -> None
```

##### `reset_anthropic_workspace_api_key` <a name="reset_anthropic_workspace_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.resetAnthropicWorkspaceApiKey"></a>

```python
def reset_anthropic_workspace_api_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.property.anthropicAdminApiKey">anthropic_admin_api_key</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference">ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.property.anthropicComplianceApiKey">anthropic_compliance_api_key</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference">ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.property.anthropicWorkspaceApiKey">anthropic_workspace_api_key</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference">ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.property.anthropicAdminApiKeyInput">anthropic_admin_api_key_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKey">ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.property.anthropicComplianceApiKeyInput">anthropic_compliance_api_key_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKey">ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.property.anthropicWorkspaceApiKeyInput">anthropic_workspace_api_key_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKey">ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropic">ZeroTrustCasbIntegrationAnthropic</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `anthropic_admin_api_key`<sup>Required</sup> <a name="anthropic_admin_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.property.anthropicAdminApiKey"></a>

```python
anthropic_admin_api_key: ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference">ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKeyOutputReference</a>

---

##### `anthropic_compliance_api_key`<sup>Required</sup> <a name="anthropic_compliance_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.property.anthropicComplianceApiKey"></a>

```python
anthropic_compliance_api_key: ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference">ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKeyOutputReference</a>

---

##### `anthropic_workspace_api_key`<sup>Required</sup> <a name="anthropic_workspace_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.property.anthropicWorkspaceApiKey"></a>

```python
anthropic_workspace_api_key: ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference">ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKeyOutputReference</a>

---

##### `anthropic_admin_api_key_input`<sup>Optional</sup> <a name="anthropic_admin_api_key_input" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.property.anthropicAdminApiKeyInput"></a>

```python
anthropic_admin_api_key_input: IResolvable | ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKey">ZeroTrustCasbIntegrationAnthropicAnthropicAdminApiKey</a>

---

##### `anthropic_compliance_api_key_input`<sup>Optional</sup> <a name="anthropic_compliance_api_key_input" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.property.anthropicComplianceApiKeyInput"></a>

```python
anthropic_compliance_api_key_input: IResolvable | ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKey">ZeroTrustCasbIntegrationAnthropicAnthropicComplianceApiKey</a>

---

##### `anthropic_workspace_api_key_input`<sup>Optional</sup> <a name="anthropic_workspace_api_key_input" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.property.anthropicWorkspaceApiKeyInput"></a>

```python
anthropic_workspace_api_key_input: IResolvable | ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKey">ZeroTrustCasbIntegrationAnthropicAnthropicWorkspaceApiKey</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropicOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ZeroTrustCasbIntegrationAnthropic
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAnthropic">ZeroTrustCasbIntegrationAnthropic</a>

---


### ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference <a name="ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_integration

zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.property.externalIdInput">external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRole">ZeroTrustCasbIntegrationAwsAwsIamRole</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.property.externalIdInput"></a>

```python
external_id_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ZeroTrustCasbIntegrationAwsAwsIamRole
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRole">ZeroTrustCasbIntegrationAwsAwsIamRole</a>

---


### ZeroTrustCasbIntegrationAwsOutputReference <a name="ZeroTrustCasbIntegrationAwsOutputReference" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_integration

zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.putAwsIamRole">put_aws_iam_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.resetAwsIamRole">reset_aws_iam_role</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aws_iam_role` <a name="put_aws_iam_role" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.putAwsIamRole"></a>

```python
def put_aws_iam_role(
  external_id: str,
  role_arn: str
) -> None
```

###### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.putAwsIamRole.parameter.externalId"></a>

- *Type:* str

External ID required when assuming the IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#external_id ZeroTrustCasbIntegration#external_id}

---

###### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.putAwsIamRole.parameter.roleArn"></a>

- *Type:* str

ARN of the cross-account IAM role Cloudflare will assume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#role_arn ZeroTrustCasbIntegration#role_arn}

---

##### `reset_aws_iam_role` <a name="reset_aws_iam_role" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.resetAwsIamRole"></a>

```python
def reset_aws_iam_role() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.property.awsIamRole">aws_iam_role</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference">ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.property.awsIamRoleInput">aws_iam_role_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRole">ZeroTrustCasbIntegrationAwsAwsIamRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAws">ZeroTrustCasbIntegrationAws</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_iam_role`<sup>Required</sup> <a name="aws_iam_role" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.property.awsIamRole"></a>

```python
aws_iam_role: ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference">ZeroTrustCasbIntegrationAwsAwsIamRoleOutputReference</a>

---

##### `aws_iam_role_input`<sup>Optional</sup> <a name="aws_iam_role_input" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.property.awsIamRoleInput"></a>

```python
aws_iam_role_input: IResolvable | ZeroTrustCasbIntegrationAwsAwsIamRole
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsAwsIamRole">ZeroTrustCasbIntegrationAwsAwsIamRole</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAwsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ZeroTrustCasbIntegrationAws
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationAws">ZeroTrustCasbIntegrationAws</a>

---


### ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference <a name="ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_integration

zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.property.enterpriseIdInput">enterprise_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.property.enterpriseId">enterprise_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthentication">ZeroTrustCasbIntegrationBoxBoxServerAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enterprise_id_input`<sup>Optional</sup> <a name="enterprise_id_input" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.property.enterpriseIdInput"></a>

```python
enterprise_id_input: str
```

- *Type:* str

---

##### `enterprise_id`<sup>Required</sup> <a name="enterprise_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.property.enterpriseId"></a>

```python
enterprise_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ZeroTrustCasbIntegrationBoxBoxServerAuthentication
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthentication">ZeroTrustCasbIntegrationBoxBoxServerAuthentication</a>

---


### ZeroTrustCasbIntegrationBoxOutputReference <a name="ZeroTrustCasbIntegrationBoxOutputReference" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_integration

zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.putBoxServerAuthentication">put_box_server_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.resetBoxServerAuthentication">reset_box_server_authentication</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_box_server_authentication` <a name="put_box_server_authentication" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.putBoxServerAuthentication"></a>

```python
def put_box_server_authentication(
  enterprise_id: str
) -> None
```

###### `enterprise_id`<sup>Required</sup> <a name="enterprise_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.putBoxServerAuthentication.parameter.enterpriseId"></a>

- *Type:* str

Box Enterprise ID from Admin Console > Accounts & Billing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#enterprise_id ZeroTrustCasbIntegration#enterprise_id}

---

##### `reset_box_server_authentication` <a name="reset_box_server_authentication" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.resetBoxServerAuthentication"></a>

```python
def reset_box_server_authentication() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.property.boxServerAuthentication">box_server_authentication</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference">ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.property.boxServerAuthenticationInput">box_server_authentication_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthentication">ZeroTrustCasbIntegrationBoxBoxServerAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBox">ZeroTrustCasbIntegrationBox</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `box_server_authentication`<sup>Required</sup> <a name="box_server_authentication" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.property.boxServerAuthentication"></a>

```python
box_server_authentication: ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference">ZeroTrustCasbIntegrationBoxBoxServerAuthenticationOutputReference</a>

---

##### `box_server_authentication_input`<sup>Optional</sup> <a name="box_server_authentication_input" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.property.boxServerAuthenticationInput"></a>

```python
box_server_authentication_input: IResolvable | ZeroTrustCasbIntegrationBoxBoxServerAuthentication
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxBoxServerAuthentication">ZeroTrustCasbIntegrationBoxBoxServerAuthentication</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBoxOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ZeroTrustCasbIntegrationBox
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationBox">ZeroTrustCasbIntegrationBox</a>

---


### ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference <a name="ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_integration

zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.property.serviceAccountKeyJsonInput">service_account_key_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.property.serviceAccountKeyJson">service_account_key_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccount">ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_account_key_json_input`<sup>Optional</sup> <a name="service_account_key_json_input" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.property.serviceAccountKeyJsonInput"></a>

```python
service_account_key_json_input: str
```

- *Type:* str

---

##### ~~`service_account_key_json`~~<sup>Required</sup> <a name="service_account_key_json" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.property.serviceAccountKeyJson"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```python
service_account_key_json: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccount
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccount">ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccount</a>

---


### ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference <a name="ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_integration

zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.putGoogleCloudPlatformServiceAccount">put_google_cloud_platform_service_account</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.resetGoogleCloudPlatformServiceAccount">reset_google_cloud_platform_service_account</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_google_cloud_platform_service_account` <a name="put_google_cloud_platform_service_account" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.putGoogleCloudPlatformServiceAccount"></a>

```python
def put_google_cloud_platform_service_account(
  service_account_key_json: str
) -> None
```

###### `service_account_key_json`<sup>Required</sup> <a name="service_account_key_json" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.putGoogleCloudPlatformServiceAccount.parameter.serviceAccountKeyJson"></a>

- *Type:* str

Contents of a Google service account JSON key file.

This value is write-only and is never persisted to Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#service_account_key_json ZeroTrustCasbIntegration#service_account_key_json}

---

##### `reset_google_cloud_platform_service_account` <a name="reset_google_cloud_platform_service_account" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.resetGoogleCloudPlatformServiceAccount"></a>

```python
def reset_google_cloud_platform_service_account() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.property.googleCloudPlatformServiceAccount">google_cloud_platform_service_account</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference">ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.property.googleCloudPlatformServiceAccountInput">google_cloud_platform_service_account_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccount">ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatform">ZeroTrustCasbIntegrationGoogleCloudPlatform</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `google_cloud_platform_service_account`<sup>Required</sup> <a name="google_cloud_platform_service_account" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.property.googleCloudPlatformServiceAccount"></a>

```python
google_cloud_platform_service_account: ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference">ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccountOutputReference</a>

---

##### `google_cloud_platform_service_account_input`<sup>Optional</sup> <a name="google_cloud_platform_service_account_input" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.property.googleCloudPlatformServiceAccountInput"></a>

```python
google_cloud_platform_service_account_input: IResolvable | ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccount
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccount">ZeroTrustCasbIntegrationGoogleCloudPlatformGoogleCloudPlatformServiceAccount</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatformOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ZeroTrustCasbIntegrationGoogleCloudPlatform
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleCloudPlatform">ZeroTrustCasbIntegrationGoogleCloudPlatform</a>

---


### ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference <a name="ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_integration

zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.property.administratorEmailInput">administrator_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.property.serviceAccountKeyJsonInput">service_account_key_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.property.administratorEmail">administrator_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.property.serviceAccountKeyJson">service_account_key_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccount">ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `administrator_email_input`<sup>Optional</sup> <a name="administrator_email_input" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.property.administratorEmailInput"></a>

```python
administrator_email_input: str
```

- *Type:* str

---

##### `service_account_key_json_input`<sup>Optional</sup> <a name="service_account_key_json_input" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.property.serviceAccountKeyJsonInput"></a>

```python
service_account_key_json_input: str
```

- *Type:* str

---

##### `administrator_email`<sup>Required</sup> <a name="administrator_email" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.property.administratorEmail"></a>

```python
administrator_email: str
```

- *Type:* str

---

##### ~~`service_account_key_json`~~<sup>Required</sup> <a name="service_account_key_json" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.property.serviceAccountKeyJson"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```python
service_account_key_json: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccount
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccount">ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccount</a>

---


### ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference <a name="ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_integration

zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.putGoogleDomainWideDelegationServiceAccount">put_google_domain_wide_delegation_service_account</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.resetGoogleDomainWideDelegationServiceAccount">reset_google_domain_wide_delegation_service_account</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_google_domain_wide_delegation_service_account` <a name="put_google_domain_wide_delegation_service_account" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.putGoogleDomainWideDelegationServiceAccount"></a>

```python
def put_google_domain_wide_delegation_service_account(
  administrator_email: str,
  service_account_key_json: str
) -> None
```

###### `administrator_email`<sup>Required</sup> <a name="administrator_email" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.putGoogleDomainWideDelegationServiceAccount.parameter.administratorEmail"></a>

- *Type:* str

A Google Workspace super administrator email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#administrator_email ZeroTrustCasbIntegration#administrator_email}

---

###### `service_account_key_json`<sup>Required</sup> <a name="service_account_key_json" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.putGoogleDomainWideDelegationServiceAccount.parameter.serviceAccountKeyJson"></a>

- *Type:* str

Contents of a Google service account JSON key file.

This value is write-only and is never persisted to Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#service_account_key_json ZeroTrustCasbIntegration#service_account_key_json}

---

##### `reset_google_domain_wide_delegation_service_account` <a name="reset_google_domain_wide_delegation_service_account" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.resetGoogleDomainWideDelegationServiceAccount"></a>

```python
def reset_google_domain_wide_delegation_service_account() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.property.googleDomainWideDelegationServiceAccount">google_domain_wide_delegation_service_account</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference">ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.property.googleDomainWideDelegationServiceAccountInput">google_domain_wide_delegation_service_account_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccount">ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspace">ZeroTrustCasbIntegrationGoogleWorkspace</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `google_domain_wide_delegation_service_account`<sup>Required</sup> <a name="google_domain_wide_delegation_service_account" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.property.googleDomainWideDelegationServiceAccount"></a>

```python
google_domain_wide_delegation_service_account: ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference">ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccountOutputReference</a>

---

##### `google_domain_wide_delegation_service_account_input`<sup>Optional</sup> <a name="google_domain_wide_delegation_service_account_input" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.property.googleDomainWideDelegationServiceAccountInput"></a>

```python
google_domain_wide_delegation_service_account_input: IResolvable | ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccount
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccount">ZeroTrustCasbIntegrationGoogleWorkspaceGoogleDomainWideDelegationServiceAccount</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspaceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ZeroTrustCasbIntegrationGoogleWorkspace
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationGoogleWorkspace">ZeroTrustCasbIntegrationGoogleWorkspace</a>

---


### ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference <a name="ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_integration

zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.resetProjectApiKey">reset_project_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.resetProjectId">reset_project_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_project_api_key` <a name="reset_project_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.resetProjectApiKey"></a>

```python
def reset_project_api_key() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.resetProjectId"></a>

```python
def reset_project_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.property.adminApiKeyInput">admin_api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.property.complianceApiKeyInput">compliance_api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.property.organizationIdInput">organization_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.property.projectApiKeyInput">project_api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.property.adminApiKey">admin_api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.property.complianceApiKey">compliance_api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.property.projectApiKey">project_api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKey">ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_api_key_input`<sup>Optional</sup> <a name="admin_api_key_input" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.property.adminApiKeyInput"></a>

```python
admin_api_key_input: str
```

- *Type:* str

---

##### `compliance_api_key_input`<sup>Optional</sup> <a name="compliance_api_key_input" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.property.complianceApiKeyInput"></a>

```python
compliance_api_key_input: str
```

- *Type:* str

---

##### `organization_id_input`<sup>Optional</sup> <a name="organization_id_input" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.property.organizationIdInput"></a>

```python
organization_id_input: str
```

- *Type:* str

---

##### `project_api_key_input`<sup>Optional</sup> <a name="project_api_key_input" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.property.projectApiKeyInput"></a>

```python
project_api_key_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### ~~`admin_api_key`~~<sup>Required</sup> <a name="admin_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.property.adminApiKey"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```python
admin_api_key: str
```

- *Type:* str

---

##### ~~`compliance_api_key`~~<sup>Required</sup> <a name="compliance_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.property.complianceApiKey"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```python
compliance_api_key: str
```

- *Type:* str

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### ~~`project_api_key`~~<sup>Required</sup> <a name="project_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.property.projectApiKey"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```python
project_api_key: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKey">ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKey</a>

---


### ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference <a name="ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_integration

zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.resetProjectApiKey">reset_project_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.resetProjectId">reset_project_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_project_api_key` <a name="reset_project_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.resetProjectApiKey"></a>

```python
def reset_project_api_key() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.resetProjectId"></a>

```python
def reset_project_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.property.adminApiKeyInput">admin_api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.property.organizationIdInput">organization_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.property.projectApiKeyInput">project_api_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.property.adminApiKey">admin_api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.property.projectApiKey">project_api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKey">ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_api_key_input`<sup>Optional</sup> <a name="admin_api_key_input" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.property.adminApiKeyInput"></a>

```python
admin_api_key_input: str
```

- *Type:* str

---

##### `organization_id_input`<sup>Optional</sup> <a name="organization_id_input" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.property.organizationIdInput"></a>

```python
organization_id_input: str
```

- *Type:* str

---

##### `project_api_key_input`<sup>Optional</sup> <a name="project_api_key_input" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.property.projectApiKeyInput"></a>

```python
project_api_key_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### ~~`admin_api_key`~~<sup>Required</sup> <a name="admin_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.property.adminApiKey"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```python
admin_api_key: str
```

- *Type:* str

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### ~~`project_api_key`~~<sup>Required</sup> <a name="project_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.property.projectApiKey"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```python
project_api_key: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKey">ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKey</a>

---


### ZeroTrustCasbIntegrationOpenaiOutputReference <a name="ZeroTrustCasbIntegrationOpenaiOutputReference" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_integration

zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.putChatgptComplianceApiKey">put_chatgpt_compliance_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.putChatgptStandardApiKey">put_chatgpt_standard_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.resetChatgptComplianceApiKey">reset_chatgpt_compliance_api_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.resetChatgptStandardApiKey">reset_chatgpt_standard_api_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_chatgpt_compliance_api_key` <a name="put_chatgpt_compliance_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.putChatgptComplianceApiKey"></a>

```python
def put_chatgpt_compliance_api_key(
  admin_api_key: str,
  compliance_api_key: str,
  organization_id: str,
  workspace_id: str,
  project_api_key: str = None,
  project_id: str = None
) -> None
```

###### `admin_api_key`<sup>Required</sup> <a name="admin_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.putChatgptComplianceApiKey.parameter.adminApiKey"></a>

- *Type:* str

OpenAI Admin API key with api.management.read access. This value is write-only and is never persisted to Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#admin_api_key ZeroTrustCasbIntegration#admin_api_key}

---

###### `compliance_api_key`<sup>Required</sup> <a name="compliance_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.putChatgptComplianceApiKey.parameter.complianceApiKey"></a>

- *Type:* str

OpenAI Compliance API key for audit logs. This value is write-only and is never persisted to Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#compliance_api_key ZeroTrustCasbIntegration#compliance_api_key}

---

###### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.putChatgptComplianceApiKey.parameter.organizationId"></a>

- *Type:* str

OpenAI Organization ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#organization_id ZeroTrustCasbIntegration#organization_id}

---

###### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.putChatgptComplianceApiKey.parameter.workspaceId"></a>

- *Type:* str

OpenAI Workspace ID for compliance data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#workspace_id ZeroTrustCasbIntegration#workspace_id}

---

###### `project_api_key`<sup>Optional</sup> <a name="project_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.putChatgptComplianceApiKey.parameter.projectApiKey"></a>

- *Type:* str

OpenAI Project API key, used for DLP. This value is write-only and is never persisted to Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#project_api_key ZeroTrustCasbIntegration#project_api_key}

---

###### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.putChatgptComplianceApiKey.parameter.projectId"></a>

- *Type:* str

OpenAI Project ID, used for DLP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#project_id ZeroTrustCasbIntegration#project_id}

---

##### `put_chatgpt_standard_api_key` <a name="put_chatgpt_standard_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.putChatgptStandardApiKey"></a>

```python
def put_chatgpt_standard_api_key(
  admin_api_key: str,
  organization_id: str,
  project_api_key: str = None,
  project_id: str = None
) -> None
```

###### `admin_api_key`<sup>Required</sup> <a name="admin_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.putChatgptStandardApiKey.parameter.adminApiKey"></a>

- *Type:* str

OpenAI Admin API key with api.management.read access. This value is write-only and is never persisted to Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#admin_api_key ZeroTrustCasbIntegration#admin_api_key}

---

###### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.putChatgptStandardApiKey.parameter.organizationId"></a>

- *Type:* str

OpenAI Organization ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#organization_id ZeroTrustCasbIntegration#organization_id}

---

###### `project_api_key`<sup>Optional</sup> <a name="project_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.putChatgptStandardApiKey.parameter.projectApiKey"></a>

- *Type:* str

OpenAI Project API key, used for DLP. This value is write-only and is never persisted to Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#project_api_key ZeroTrustCasbIntegration#project_api_key}

---

###### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.putChatgptStandardApiKey.parameter.projectId"></a>

- *Type:* str

OpenAI Project ID, used for DLP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/resources/zero_trust_casb_integration#project_id ZeroTrustCasbIntegration#project_id}

---

##### `reset_chatgpt_compliance_api_key` <a name="reset_chatgpt_compliance_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.resetChatgptComplianceApiKey"></a>

```python
def reset_chatgpt_compliance_api_key() -> None
```

##### `reset_chatgpt_standard_api_key` <a name="reset_chatgpt_standard_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.resetChatgptStandardApiKey"></a>

```python
def reset_chatgpt_standard_api_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.property.chatgptComplianceApiKey">chatgpt_compliance_api_key</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference">ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.property.chatgptStandardApiKey">chatgpt_standard_api_key</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference">ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.property.chatgptComplianceApiKeyInput">chatgpt_compliance_api_key_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKey">ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.property.chatgptStandardApiKeyInput">chatgpt_standard_api_key_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKey">ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenai">ZeroTrustCasbIntegrationOpenai</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `chatgpt_compliance_api_key`<sup>Required</sup> <a name="chatgpt_compliance_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.property.chatgptComplianceApiKey"></a>

```python
chatgpt_compliance_api_key: ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference">ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKeyOutputReference</a>

---

##### `chatgpt_standard_api_key`<sup>Required</sup> <a name="chatgpt_standard_api_key" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.property.chatgptStandardApiKey"></a>

```python
chatgpt_standard_api_key: ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference">ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKeyOutputReference</a>

---

##### `chatgpt_compliance_api_key_input`<sup>Optional</sup> <a name="chatgpt_compliance_api_key_input" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.property.chatgptComplianceApiKeyInput"></a>

```python
chatgpt_compliance_api_key_input: IResolvable | ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKey">ZeroTrustCasbIntegrationOpenaiChatgptComplianceApiKey</a>

---

##### `chatgpt_standard_api_key_input`<sup>Optional</sup> <a name="chatgpt_standard_api_key_input" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.property.chatgptStandardApiKeyInput"></a>

```python
chatgpt_standard_api_key_input: IResolvable | ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKey
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKey">ZeroTrustCasbIntegrationOpenaiChatgptStandardApiKey</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenaiOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ZeroTrustCasbIntegrationOpenai
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustCasbIntegration.ZeroTrustCasbIntegrationOpenai">ZeroTrustCasbIntegrationOpenai</a>

---



