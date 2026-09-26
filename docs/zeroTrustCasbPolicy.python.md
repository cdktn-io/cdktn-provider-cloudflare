# `zeroTrustCasbPolicy` Submodule <a name="`zeroTrustCasbPolicy` Submodule" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustCasbPolicy <a name="ZeroTrustCasbPolicy" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy cloudflare_zero_trust_casb_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_policy

zeroTrustCasbPolicy.ZeroTrustCasbPolicy(
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
  actions: ZeroTrustCasbPolicyActions,
  applies_to_all_integrations: bool | IResolvable,
  display_name: str,
  enabled: bool | IResolvable,
  finding_type_id: str,
  description: str = None,
  integration_ids: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#account_id ZeroTrustCasbPolicy#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.actions">actions</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActions">ZeroTrustCasbPolicyActions</a></code> | Actions to execute when this policy is triggered, grouped by action type. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.appliesToAllIntegrations">applies_to_all_integrations</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, the policy applies to all integrations for the account. When false, integration_ids must be provided. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Display name for the policy configuration. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Boolean specifying if the policy is enabled or disabled. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.findingTypeId">finding_type_id</a></code> | <code>str</code> | The finding type this policy is associated with. All remediation actions must match this finding type. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | Optional description of what this policy does. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.integrationIds">integration_ids</a></code> | <code>typing.List[str]</code> | The integrations this policy applies to. Required when applies_to_all_integrations is false. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#account_id ZeroTrustCasbPolicy#account_id}.

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.actions"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActions">ZeroTrustCasbPolicyActions</a>

Actions to execute when this policy is triggered, grouped by action type.

A policy must contain at least one action across all groups and may include
at most one remediation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#actions ZeroTrustCasbPolicy#actions}

---

##### `applies_to_all_integrations`<sup>Required</sup> <a name="applies_to_all_integrations" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.appliesToAllIntegrations"></a>

- *Type:* bool | cdktn.IResolvable

When true, the policy applies to all integrations for the account. When false, integration_ids must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#applies_to_all_integrations ZeroTrustCasbPolicy#applies_to_all_integrations}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.displayName"></a>

- *Type:* str

Display name for the policy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#display_name ZeroTrustCasbPolicy#display_name}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Boolean specifying if the policy is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#enabled ZeroTrustCasbPolicy#enabled}

---

##### `finding_type_id`<sup>Required</sup> <a name="finding_type_id" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.findingTypeId"></a>

- *Type:* str

The finding type this policy is associated with. All remediation actions must match this finding type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#finding_type_id ZeroTrustCasbPolicy#finding_type_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.description"></a>

- *Type:* str

Optional description of what this policy does.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#description ZeroTrustCasbPolicy#description}

---

##### `integration_ids`<sup>Optional</sup> <a name="integration_ids" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.integrationIds"></a>

- *Type:* typing.List[str]

The integrations this policy applies to. Required when applies_to_all_integrations is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#integration_ids ZeroTrustCasbPolicy#integration_ids}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.putActions">put_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.resetIntegrationIds">reset_integration_ids</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_actions` <a name="put_actions" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.putActions"></a>

```python
def put_actions(
  remediation_types: IResolvable | typing.List[ZeroTrustCasbPolicyActionsRemediationTypes] = None,
  webhook_configs: IResolvable | typing.List[ZeroTrustCasbPolicyActionsWebhookConfigs] = None
) -> None
```

###### `remediation_types`<sup>Optional</sup> <a name="remediation_types" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.putActions.parameter.remediationTypes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypes">ZeroTrustCasbPolicyActionsRemediationTypes</a>]

Remediation actions to execute (at most one).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#remediation_types ZeroTrustCasbPolicy#remediation_types}

---

###### `webhook_configs`<sup>Optional</sup> <a name="webhook_configs" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.putActions.parameter.webhookConfigs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigs">ZeroTrustCasbPolicyActionsWebhookConfigs</a>]

Webhook actions to execute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#webhook_configs ZeroTrustCasbPolicy#webhook_configs}

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_integration_ids` <a name="reset_integration_ids" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.resetIntegrationIds"></a>

```python
def reset_integration_ids() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ZeroTrustCasbPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.isConstruct"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_policy

zeroTrustCasbPolicy.ZeroTrustCasbPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_policy

zeroTrustCasbPolicy.ZeroTrustCasbPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.isTerraformResource"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_policy

zeroTrustCasbPolicy.ZeroTrustCasbPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_policy

zeroTrustCasbPolicy.ZeroTrustCasbPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ZeroTrustCasbPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ZeroTrustCasbPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ZeroTrustCasbPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustCasbPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference">ZeroTrustCasbPolicyActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.disabledAt">disabled_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.lastTriggeredAt">last_triggered_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.actionsInput">actions_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActions">ZeroTrustCasbPolicyActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.appliesToAllIntegrationsInput">applies_to_all_integrations_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.findingTypeIdInput">finding_type_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.integrationIdsInput">integration_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.appliesToAllIntegrations">applies_to_all_integrations</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.findingTypeId">finding_type_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.integrationIds">integration_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.actions"></a>

```python
actions: ZeroTrustCasbPolicyActionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference">ZeroTrustCasbPolicyActionsOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `disabled_at`<sup>Required</sup> <a name="disabled_at" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.disabledAt"></a>

```python
disabled_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_triggered_at`<sup>Required</sup> <a name="last_triggered_at" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.lastTriggeredAt"></a>

```python
last_triggered_at: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.actionsInput"></a>

```python
actions_input: IResolvable | ZeroTrustCasbPolicyActions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActions">ZeroTrustCasbPolicyActions</a>

---

##### `applies_to_all_integrations_input`<sup>Optional</sup> <a name="applies_to_all_integrations_input" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.appliesToAllIntegrationsInput"></a>

```python
applies_to_all_integrations_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `finding_type_id_input`<sup>Optional</sup> <a name="finding_type_id_input" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.findingTypeIdInput"></a>

```python
finding_type_id_input: str
```

- *Type:* str

---

##### `integration_ids_input`<sup>Optional</sup> <a name="integration_ids_input" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.integrationIdsInput"></a>

```python
integration_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `applies_to_all_integrations`<sup>Required</sup> <a name="applies_to_all_integrations" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.appliesToAllIntegrations"></a>

```python
applies_to_all_integrations: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `finding_type_id`<sup>Required</sup> <a name="finding_type_id" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.findingTypeId"></a>

```python
finding_type_id: str
```

- *Type:* str

---

##### `integration_ids`<sup>Required</sup> <a name="integration_ids" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.integrationIds"></a>

```python
integration_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustCasbPolicyActions <a name="ZeroTrustCasbPolicyActions" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActions.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_policy

zeroTrustCasbPolicy.ZeroTrustCasbPolicyActions(
  remediation_types: IResolvable | typing.List[ZeroTrustCasbPolicyActionsRemediationTypes] = None,
  webhook_configs: IResolvable | typing.List[ZeroTrustCasbPolicyActionsWebhookConfigs] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActions.property.remediationTypes">remediation_types</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypes">ZeroTrustCasbPolicyActionsRemediationTypes</a>]</code> | Remediation actions to execute (at most one). |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActions.property.webhookConfigs">webhook_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigs">ZeroTrustCasbPolicyActionsWebhookConfigs</a>]</code> | Webhook actions to execute. |

---

##### `remediation_types`<sup>Optional</sup> <a name="remediation_types" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActions.property.remediationTypes"></a>

```python
remediation_types: IResolvable | typing.List[ZeroTrustCasbPolicyActionsRemediationTypes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypes">ZeroTrustCasbPolicyActionsRemediationTypes</a>]

Remediation actions to execute (at most one).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#remediation_types ZeroTrustCasbPolicy#remediation_types}

---

##### `webhook_configs`<sup>Optional</sup> <a name="webhook_configs" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActions.property.webhookConfigs"></a>

```python
webhook_configs: IResolvable | typing.List[ZeroTrustCasbPolicyActionsWebhookConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigs">ZeroTrustCasbPolicyActionsWebhookConfigs</a>]

Webhook actions to execute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#webhook_configs ZeroTrustCasbPolicy#webhook_configs}

---

### ZeroTrustCasbPolicyActionsRemediationTypes <a name="ZeroTrustCasbPolicyActionsRemediationTypes" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypes.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_policy

zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypes(
  remediation_type_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypes.property.remediationTypeId">remediation_type_id</a></code> | <code>str</code> | The ID of the remediation type to execute. |

---

##### `remediation_type_id`<sup>Required</sup> <a name="remediation_type_id" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypes.property.remediationTypeId"></a>

```python
remediation_type_id: str
```

- *Type:* str

The ID of the remediation type to execute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#remediation_type_id ZeroTrustCasbPolicy#remediation_type_id}

---

### ZeroTrustCasbPolicyActionsWebhookConfigs <a name="ZeroTrustCasbPolicyActionsWebhookConfigs" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigs.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_policy

zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigs(
  webhook_config_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigs.property.webhookConfigId">webhook_config_id</a></code> | <code>str</code> | The ID of the webhook configuration to use. |

---

##### `webhook_config_id`<sup>Required</sup> <a name="webhook_config_id" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigs.property.webhookConfigId"></a>

```python
webhook_config_id: str
```

- *Type:* str

The ID of the webhook configuration to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#webhook_config_id ZeroTrustCasbPolicy#webhook_config_id}

---

### ZeroTrustCasbPolicyConfig <a name="ZeroTrustCasbPolicyConfig" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_policy

zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  actions: ZeroTrustCasbPolicyActions,
  applies_to_all_integrations: bool | IResolvable,
  display_name: str,
  enabled: bool | IResolvable,
  finding_type_id: str,
  description: str = None,
  integration_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#account_id ZeroTrustCasbPolicy#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActions">ZeroTrustCasbPolicyActions</a></code> | Actions to execute when this policy is triggered, grouped by action type. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.appliesToAllIntegrations">applies_to_all_integrations</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, the policy applies to all integrations for the account. When false, integration_ids must be provided. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.displayName">display_name</a></code> | <code>str</code> | Display name for the policy configuration. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Boolean specifying if the policy is enabled or disabled. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.findingTypeId">finding_type_id</a></code> | <code>str</code> | The finding type this policy is associated with. All remediation actions must match this finding type. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.description">description</a></code> | <code>str</code> | Optional description of what this policy does. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.integrationIds">integration_ids</a></code> | <code>typing.List[str]</code> | The integrations this policy applies to. Required when applies_to_all_integrations is false. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#account_id ZeroTrustCasbPolicy#account_id}.

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.actions"></a>

```python
actions: ZeroTrustCasbPolicyActions
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActions">ZeroTrustCasbPolicyActions</a>

Actions to execute when this policy is triggered, grouped by action type.

A policy must contain at least one action across all groups and may include
at most one remediation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#actions ZeroTrustCasbPolicy#actions}

---

##### `applies_to_all_integrations`<sup>Required</sup> <a name="applies_to_all_integrations" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.appliesToAllIntegrations"></a>

```python
applies_to_all_integrations: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When true, the policy applies to all integrations for the account. When false, integration_ids must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#applies_to_all_integrations ZeroTrustCasbPolicy#applies_to_all_integrations}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display name for the policy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#display_name ZeroTrustCasbPolicy#display_name}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Boolean specifying if the policy is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#enabled ZeroTrustCasbPolicy#enabled}

---

##### `finding_type_id`<sup>Required</sup> <a name="finding_type_id" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.findingTypeId"></a>

```python
finding_type_id: str
```

- *Type:* str

The finding type this policy is associated with. All remediation actions must match this finding type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#finding_type_id ZeroTrustCasbPolicy#finding_type_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Optional description of what this policy does.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#description ZeroTrustCasbPolicy#description}

---

##### `integration_ids`<sup>Optional</sup> <a name="integration_ids" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.integrationIds"></a>

```python
integration_ids: typing.List[str]
```

- *Type:* typing.List[str]

The integrations this policy applies to. Required when applies_to_all_integrations is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#integration_ids ZeroTrustCasbPolicy#integration_ids}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustCasbPolicyActionsOutputReference <a name="ZeroTrustCasbPolicyActionsOutputReference" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_policy

zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.putRemediationTypes">put_remediation_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.putWebhookConfigs">put_webhook_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.resetRemediationTypes">reset_remediation_types</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.resetWebhookConfigs">reset_webhook_configs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_remediation_types` <a name="put_remediation_types" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.putRemediationTypes"></a>

```python
def put_remediation_types(
  value: IResolvable | typing.List[ZeroTrustCasbPolicyActionsRemediationTypes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.putRemediationTypes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypes">ZeroTrustCasbPolicyActionsRemediationTypes</a>]

---

##### `put_webhook_configs` <a name="put_webhook_configs" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.putWebhookConfigs"></a>

```python
def put_webhook_configs(
  value: IResolvable | typing.List[ZeroTrustCasbPolicyActionsWebhookConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.putWebhookConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigs">ZeroTrustCasbPolicyActionsWebhookConfigs</a>]

---

##### `reset_remediation_types` <a name="reset_remediation_types" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.resetRemediationTypes"></a>

```python
def reset_remediation_types() -> None
```

##### `reset_webhook_configs` <a name="reset_webhook_configs" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.resetWebhookConfigs"></a>

```python
def reset_webhook_configs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.property.remediationTypes">remediation_types</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList">ZeroTrustCasbPolicyActionsRemediationTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.property.webhookConfigs">webhook_configs</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList">ZeroTrustCasbPolicyActionsWebhookConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.property.remediationTypesInput">remediation_types_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypes">ZeroTrustCasbPolicyActionsRemediationTypes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.property.webhookConfigsInput">webhook_configs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigs">ZeroTrustCasbPolicyActionsWebhookConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActions">ZeroTrustCasbPolicyActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `remediation_types`<sup>Required</sup> <a name="remediation_types" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.property.remediationTypes"></a>

```python
remediation_types: ZeroTrustCasbPolicyActionsRemediationTypesList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList">ZeroTrustCasbPolicyActionsRemediationTypesList</a>

---

##### `webhook_configs`<sup>Required</sup> <a name="webhook_configs" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.property.webhookConfigs"></a>

```python
webhook_configs: ZeroTrustCasbPolicyActionsWebhookConfigsList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList">ZeroTrustCasbPolicyActionsWebhookConfigsList</a>

---

##### `remediation_types_input`<sup>Optional</sup> <a name="remediation_types_input" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.property.remediationTypesInput"></a>

```python
remediation_types_input: IResolvable | typing.List[ZeroTrustCasbPolicyActionsRemediationTypes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypes">ZeroTrustCasbPolicyActionsRemediationTypes</a>]

---

##### `webhook_configs_input`<sup>Optional</sup> <a name="webhook_configs_input" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.property.webhookConfigsInput"></a>

```python
webhook_configs_input: IResolvable | typing.List[ZeroTrustCasbPolicyActionsWebhookConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigs">ZeroTrustCasbPolicyActionsWebhookConfigs</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ZeroTrustCasbPolicyActions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActions">ZeroTrustCasbPolicyActions</a>

---


### ZeroTrustCasbPolicyActionsRemediationTypesList <a name="ZeroTrustCasbPolicyActionsRemediationTypesList" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_policy

zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ZeroTrustCasbPolicyActionsRemediationTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypes">ZeroTrustCasbPolicyActionsRemediationTypes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ZeroTrustCasbPolicyActionsRemediationTypes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypes">ZeroTrustCasbPolicyActionsRemediationTypes</a>]

---


### ZeroTrustCasbPolicyActionsRemediationTypesOutputReference <a name="ZeroTrustCasbPolicyActionsRemediationTypesOutputReference" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_policy

zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.property.remediationTypeIdInput">remediation_type_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.property.remediationTypeId">remediation_type_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypes">ZeroTrustCasbPolicyActionsRemediationTypes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `remediation_type_id_input`<sup>Optional</sup> <a name="remediation_type_id_input" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.property.remediationTypeIdInput"></a>

```python
remediation_type_id_input: str
```

- *Type:* str

---

##### `remediation_type_id`<sup>Required</sup> <a name="remediation_type_id" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.property.remediationTypeId"></a>

```python
remediation_type_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ZeroTrustCasbPolicyActionsRemediationTypes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypes">ZeroTrustCasbPolicyActionsRemediationTypes</a>

---


### ZeroTrustCasbPolicyActionsWebhookConfigsList <a name="ZeroTrustCasbPolicyActionsWebhookConfigsList" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_policy

zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigs">ZeroTrustCasbPolicyActionsWebhookConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ZeroTrustCasbPolicyActionsWebhookConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigs">ZeroTrustCasbPolicyActionsWebhookConfigs</a>]

---


### ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference <a name="ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_casb_policy

zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.property.webhookConfigIdInput">webhook_config_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.property.webhookConfigId">webhook_config_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigs">ZeroTrustCasbPolicyActionsWebhookConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `webhook_config_id_input`<sup>Optional</sup> <a name="webhook_config_id_input" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.property.webhookConfigIdInput"></a>

```python
webhook_config_id_input: str
```

- *Type:* str

---

##### `webhook_config_id`<sup>Required</sup> <a name="webhook_config_id" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.property.webhookConfigId"></a>

```python
webhook_config_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ZeroTrustCasbPolicyActionsWebhookConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigs">ZeroTrustCasbPolicyActionsWebhookConfigs</a>

---



