# `zeroTrustCasbFindingType` Submodule <a name="`zeroTrustCasbFindingType` Submodule" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustCasbFindingType <a name="ZeroTrustCasbFindingType" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type cloudflare_zero_trust_casb_finding_type}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_finding_type

zeroTrustCasbFindingType.ZeroTrustCasbFindingType(
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
  applies_to_all_integrations: bool | IResolvable,
  asset_class: str,
  asset_vendor: str,
  description: str,
  expression: str,
  name: str,
  severity: str,
  integration_ids: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#account_id ZeroTrustCasbFindingType#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.appliesToAllIntegrations">applies_to_all_integrations</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, this finding type applies to every current and future integration of the vendor. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.assetClass">asset_class</a></code> | <code>str</code> | Asset class this finding type applies to (PascalCase, e.g. GoogleWorkspaceFile). |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.assetVendor">asset_vendor</a></code> | <code>str</code> | Canonical vendor enum for the platform whose assets this finding type evaluates. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.description">description</a></code> | <code>str</code> | Human-readable description of the finding type. Cannot be empty. Maximum 4096 characters. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.expression">expression</a></code> | <code>str</code> | Rego expression body for the policy. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.name">name</a></code> | <code>str</code> | Human-readable name for the finding type. Maximum 256 characters. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.severity">severity</a></code> | <code>str</code> | Default severity used when no integration-specific severity override exists. Available values: "Critical", "High", "Medium", "Low". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.integrationIds">integration_ids</a></code> | <code>typing.List[str]</code> | Required and non-empty when applies_to_all_integrations is false; omit when it is true. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#account_id ZeroTrustCasbFindingType#account_id}.

---

##### `applies_to_all_integrations`<sup>Required</sup> <a name="applies_to_all_integrations" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.appliesToAllIntegrations"></a>

- *Type:* bool | cdktn.IResolvable

When true, this finding type applies to every current and future integration of the vendor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#applies_to_all_integrations ZeroTrustCasbFindingType#applies_to_all_integrations}

---

##### `asset_class`<sup>Required</sup> <a name="asset_class" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.assetClass"></a>

- *Type:* str

Asset class this finding type applies to (PascalCase, e.g. GoogleWorkspaceFile).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#asset_class ZeroTrustCasbFindingType#asset_class}

---

##### `asset_vendor`<sup>Required</sup> <a name="asset_vendor" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.assetVendor"></a>

- *Type:* str

Canonical vendor enum for the platform whose assets this finding type evaluates.

Available values: "ANTHROPIC", "AWS", "BITBUCKET", "BOX", "CONFLUENCE", "DROPBOX", "GITHUB", "GOOGLE_CLOUD_PLATFORM", "GOOGLE_WORKSPACE", "JIRA", "MICROSOFT", "OPENAI", "SALESFORCE", "SERVICENOW", "SLACK", "ZOOM".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#asset_vendor ZeroTrustCasbFindingType#asset_vendor}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.description"></a>

- *Type:* str

Human-readable description of the finding type. Cannot be empty. Maximum 4096 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#description ZeroTrustCasbFindingType#description}

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.expression"></a>

- *Type:* str

Rego expression body for the policy.

`package cloudflare.casb.custom` and `import rego.v1` are added automatically. Do not include package or import declarations. This field cannot be changed after creation. Maximum 4096 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#expression ZeroTrustCasbFindingType#expression}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.name"></a>

- *Type:* str

Human-readable name for the finding type. Maximum 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#name ZeroTrustCasbFindingType#name}

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.severity"></a>

- *Type:* str

Default severity used when no integration-specific severity override exists. Available values: "Critical", "High", "Medium", "Low".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#severity ZeroTrustCasbFindingType#severity}

---

##### `integration_ids`<sup>Optional</sup> <a name="integration_ids" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.integrationIds"></a>

- *Type:* typing.List[str]

Required and non-empty when applies_to_all_integrations is false; omit when it is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#integration_ids ZeroTrustCasbFindingType#integration_ids}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.resetIntegrationIds">reset_integration_ids</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_integration_ids` <a name="reset_integration_ids" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.resetIntegrationIds"></a>

```python
def reset_integration_ids() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ZeroTrustCasbFindingType resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.isConstruct"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_finding_type

zeroTrustCasbFindingType.ZeroTrustCasbFindingType.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_finding_type

zeroTrustCasbFindingType.ZeroTrustCasbFindingType.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.isTerraformResource"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_finding_type

zeroTrustCasbFindingType.ZeroTrustCasbFindingType.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_finding_type

zeroTrustCasbFindingType.ZeroTrustCasbFindingType.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ZeroTrustCasbFindingType resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ZeroTrustCasbFindingType to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ZeroTrustCasbFindingType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustCasbFindingType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.category">category</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference">ZeroTrustCasbFindingTypeCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.matchCount">match_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.origin">origin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.quarantined">quarantined</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.vendor">vendor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.appliesToAllIntegrationsInput">applies_to_all_integrations_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.assetClassInput">asset_class_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.assetVendorInput">asset_vendor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.integrationIdsInput">integration_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.severityInput">severity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.appliesToAllIntegrations">applies_to_all_integrations</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.assetClass">asset_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.assetVendor">asset_vendor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.integrationIds">integration_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.severity">severity</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.category"></a>

```python
category: ZeroTrustCasbFindingTypeCategoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference">ZeroTrustCasbFindingTypeCategoryOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `match_count`<sup>Required</sup> <a name="match_count" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.matchCount"></a>

```python
match_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.origin"></a>

```python
origin: str
```

- *Type:* str

---

##### `quarantined`<sup>Required</sup> <a name="quarantined" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.quarantined"></a>

```python
quarantined: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `vendor`<sup>Required</sup> <a name="vendor" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.vendor"></a>

```python
vendor: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `applies_to_all_integrations_input`<sup>Optional</sup> <a name="applies_to_all_integrations_input" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.appliesToAllIntegrationsInput"></a>

```python
applies_to_all_integrations_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `asset_class_input`<sup>Optional</sup> <a name="asset_class_input" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.assetClassInput"></a>

```python
asset_class_input: str
```

- *Type:* str

---

##### `asset_vendor_input`<sup>Optional</sup> <a name="asset_vendor_input" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.assetVendorInput"></a>

```python
asset_vendor_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `integration_ids_input`<sup>Optional</sup> <a name="integration_ids_input" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.integrationIdsInput"></a>

```python
integration_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `severity_input`<sup>Optional</sup> <a name="severity_input" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.severityInput"></a>

```python
severity_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `applies_to_all_integrations`<sup>Required</sup> <a name="applies_to_all_integrations" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.appliesToAllIntegrations"></a>

```python
applies_to_all_integrations: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `asset_class`<sup>Required</sup> <a name="asset_class" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.assetClass"></a>

```python
asset_class: str
```

- *Type:* str

---

##### `asset_vendor`<sup>Required</sup> <a name="asset_vendor" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.assetVendor"></a>

```python
asset_vendor: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `integration_ids`<sup>Required</sup> <a name="integration_ids" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.integrationIds"></a>

```python
integration_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustCasbFindingTypeCategory <a name="ZeroTrustCasbFindingTypeCategory" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategory.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_finding_type

zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategory()
```


### ZeroTrustCasbFindingTypeConfig <a name="ZeroTrustCasbFindingTypeConfig" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_finding_type

zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  applies_to_all_integrations: bool | IResolvable,
  asset_class: str,
  asset_vendor: str,
  description: str,
  expression: str,
  name: str,
  severity: str,
  integration_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#account_id ZeroTrustCasbFindingType#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.appliesToAllIntegrations">applies_to_all_integrations</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, this finding type applies to every current and future integration of the vendor. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.assetClass">asset_class</a></code> | <code>str</code> | Asset class this finding type applies to (PascalCase, e.g. GoogleWorkspaceFile). |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.assetVendor">asset_vendor</a></code> | <code>str</code> | Canonical vendor enum for the platform whose assets this finding type evaluates. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.description">description</a></code> | <code>str</code> | Human-readable description of the finding type. Cannot be empty. Maximum 4096 characters. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.expression">expression</a></code> | <code>str</code> | Rego expression body for the policy. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.name">name</a></code> | <code>str</code> | Human-readable name for the finding type. Maximum 256 characters. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.severity">severity</a></code> | <code>str</code> | Default severity used when no integration-specific severity override exists. Available values: "Critical", "High", "Medium", "Low". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.integrationIds">integration_ids</a></code> | <code>typing.List[str]</code> | Required and non-empty when applies_to_all_integrations is false; omit when it is true. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#account_id ZeroTrustCasbFindingType#account_id}.

---

##### `applies_to_all_integrations`<sup>Required</sup> <a name="applies_to_all_integrations" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.appliesToAllIntegrations"></a>

```python
applies_to_all_integrations: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When true, this finding type applies to every current and future integration of the vendor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#applies_to_all_integrations ZeroTrustCasbFindingType#applies_to_all_integrations}

---

##### `asset_class`<sup>Required</sup> <a name="asset_class" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.assetClass"></a>

```python
asset_class: str
```

- *Type:* str

Asset class this finding type applies to (PascalCase, e.g. GoogleWorkspaceFile).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#asset_class ZeroTrustCasbFindingType#asset_class}

---

##### `asset_vendor`<sup>Required</sup> <a name="asset_vendor" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.assetVendor"></a>

```python
asset_vendor: str
```

- *Type:* str

Canonical vendor enum for the platform whose assets this finding type evaluates.

Available values: "ANTHROPIC", "AWS", "BITBUCKET", "BOX", "CONFLUENCE", "DROPBOX", "GITHUB", "GOOGLE_CLOUD_PLATFORM", "GOOGLE_WORKSPACE", "JIRA", "MICROSOFT", "OPENAI", "SALESFORCE", "SERVICENOW", "SLACK", "ZOOM".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#asset_vendor ZeroTrustCasbFindingType#asset_vendor}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Human-readable description of the finding type. Cannot be empty. Maximum 4096 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#description ZeroTrustCasbFindingType#description}

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.expression"></a>

```python
expression: str
```

- *Type:* str

Rego expression body for the policy.

`package cloudflare.casb.custom` and `import rego.v1` are added automatically. Do not include package or import declarations. This field cannot be changed after creation. Maximum 4096 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#expression ZeroTrustCasbFindingType#expression}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Human-readable name for the finding type. Maximum 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#name ZeroTrustCasbFindingType#name}

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.severity"></a>

```python
severity: str
```

- *Type:* str

Default severity used when no integration-specific severity override exists. Available values: "Critical", "High", "Medium", "Low".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#severity ZeroTrustCasbFindingType#severity}

---

##### `integration_ids`<sup>Optional</sup> <a name="integration_ids" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.integrationIds"></a>

```python
integration_ids: typing.List[str]
```

- *Type:* typing.List[str]

Required and non-empty when applies_to_all_integrations is false; omit when it is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#integration_ids ZeroTrustCasbFindingType#integration_ids}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustCasbFindingTypeCategoryOutputReference <a name="ZeroTrustCasbFindingTypeCategoryOutputReference" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_finding_type

zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.observation">observation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.product">product</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategory">ZeroTrustCasbFindingTypeCategory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `observation`<sup>Required</sup> <a name="observation" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.observation"></a>

```python
observation: str
```

- *Type:* str

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.product"></a>

```python
product: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.internalValue"></a>

```python
internal_value: ZeroTrustCasbFindingTypeCategory
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategory">ZeroTrustCasbFindingTypeCategory</a>

---



