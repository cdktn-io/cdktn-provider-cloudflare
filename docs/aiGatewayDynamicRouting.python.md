# `aiGatewayDynamicRouting` Submodule <a name="`aiGatewayDynamicRouting` Submodule" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiGatewayDynamicRouting <a name="AiGatewayDynamicRouting" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing cloudflare_ai_gateway_dynamic_routing}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRouting(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  elements: IResolvable | typing.List[AiGatewayDynamicRoutingElements],
  gateway_id: str,
  name: str,
  account_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.elements">elements</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements">AiGatewayDynamicRoutingElements</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#elements AiGatewayDynamicRouting#elements}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.gatewayId">gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#gateway_id AiGatewayDynamicRouting#gateway_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#name AiGatewayDynamicRouting#name}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#account_id AiGatewayDynamicRouting#account_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `elements`<sup>Required</sup> <a name="elements" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.elements"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements">AiGatewayDynamicRoutingElements</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#elements AiGatewayDynamicRouting#elements}.

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.gatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#gateway_id AiGatewayDynamicRouting#gateway_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#name AiGatewayDynamicRouting#name}.

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#account_id AiGatewayDynamicRouting#account_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.putElements">put_elements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.resetAccountId">reset_account_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_elements` <a name="put_elements" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.putElements"></a>

```python
def put_elements(
  value: IResolvable | typing.List[AiGatewayDynamicRoutingElements]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.putElements.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements">AiGatewayDynamicRoutingElements</a>]

---

##### `reset_account_id` <a name="reset_account_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.resetAccountId"></a>

```python
def reset_account_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AiGatewayDynamicRouting resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.isConstruct"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRouting.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRouting.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.isTerraformResource"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRouting.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRouting.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AiGatewayDynamicRouting resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AiGatewayDynamicRouting to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AiGatewayDynamicRouting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AiGatewayDynamicRouting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.deployment">deployment</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference">AiGatewayDynamicRoutingDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.elements">elements</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList">AiGatewayDynamicRoutingElementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.route">route</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference">AiGatewayDynamicRoutingRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.success">success</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.version">version</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference">AiGatewayDynamicRoutingVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.elementsInput">elements_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements">AiGatewayDynamicRoutingElements</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.gatewayIdInput">gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.gatewayId">gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.deployment"></a>

```python
deployment: AiGatewayDynamicRoutingDeploymentOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference">AiGatewayDynamicRoutingDeploymentOutputReference</a>

---

##### `elements`<sup>Required</sup> <a name="elements" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.elements"></a>

```python
elements: AiGatewayDynamicRoutingElementsList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList">AiGatewayDynamicRoutingElementsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.route"></a>

```python
route: AiGatewayDynamicRoutingRouteOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference">AiGatewayDynamicRoutingRouteOutputReference</a>

---

##### `success`<sup>Required</sup> <a name="success" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.success"></a>

```python
success: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.version"></a>

```python
version: AiGatewayDynamicRoutingVersionOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference">AiGatewayDynamicRoutingVersionOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `elements_input`<sup>Optional</sup> <a name="elements_input" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.elementsInput"></a>

```python
elements_input: IResolvable | typing.List[AiGatewayDynamicRoutingElements]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements">AiGatewayDynamicRoutingElements</a>]

---

##### `gateway_id_input`<sup>Optional</sup> <a name="gateway_id_input" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.gatewayIdInput"></a>

```python
gateway_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRouting.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AiGatewayDynamicRoutingConfig <a name="AiGatewayDynamicRoutingConfig" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  elements: IResolvable | typing.List[AiGatewayDynamicRoutingElements],
  gateway_id: str,
  name: str,
  account_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.elements">elements</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements">AiGatewayDynamicRoutingElements</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#elements AiGatewayDynamicRouting#elements}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.gatewayId">gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#gateway_id AiGatewayDynamicRouting#gateway_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#name AiGatewayDynamicRouting#name}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#account_id AiGatewayDynamicRouting#account_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `elements`<sup>Required</sup> <a name="elements" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.elements"></a>

```python
elements: IResolvable | typing.List[AiGatewayDynamicRoutingElements]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements">AiGatewayDynamicRoutingElements</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#elements AiGatewayDynamicRouting#elements}.

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#gateway_id AiGatewayDynamicRouting#gateway_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#name AiGatewayDynamicRouting#name}.

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#account_id AiGatewayDynamicRouting#account_id}.

---

### AiGatewayDynamicRoutingDeployment <a name="AiGatewayDynamicRoutingDeployment" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeployment.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeployment()
```


### AiGatewayDynamicRoutingElements <a name="AiGatewayDynamicRoutingElements" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements(
  id: str,
  outputs: AiGatewayDynamicRoutingElementsOutputs,
  type: str,
  properties: AiGatewayDynamicRoutingElementsProperties = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#id AiGatewayDynamicRouting#id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements.property.outputs">outputs</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs">AiGatewayDynamicRoutingElementsOutputs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#outputs AiGatewayDynamicRouting#outputs}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements.property.type">type</a></code> | <code>str</code> | Available values: "start", "conditional", "percentage", "rate", "model", "end". |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties">AiGatewayDynamicRoutingElementsProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#properties AiGatewayDynamicRouting#properties}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#id AiGatewayDynamicRouting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements.property.outputs"></a>

```python
outputs: AiGatewayDynamicRoutingElementsOutputs
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs">AiGatewayDynamicRoutingElementsOutputs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#outputs AiGatewayDynamicRouting#outputs}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements.property.type"></a>

```python
type: str
```

- *Type:* str

Available values: "start", "conditional", "percentage", "rate", "model", "end".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#type AiGatewayDynamicRouting#type}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements.property.properties"></a>

```python
properties: AiGatewayDynamicRoutingElementsProperties
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties">AiGatewayDynamicRoutingElementsProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#properties AiGatewayDynamicRouting#properties}.

---

### AiGatewayDynamicRoutingElementsOutputs <a name="AiGatewayDynamicRoutingElementsOutputs" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs(
  element_id: str = None,
  fallback: AiGatewayDynamicRoutingElementsOutputsFallback = None,
  false: AiGatewayDynamicRoutingElementsOutputsFalse = None,
  next: AiGatewayDynamicRoutingElementsOutputsNext = None,
  success: AiGatewayDynamicRoutingElementsOutputsSuccess = None,
  true: AiGatewayDynamicRoutingElementsOutputsTrue = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.elementId">element_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.fallback">fallback</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback">AiGatewayDynamicRoutingElementsOutputsFallback</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#fallback AiGatewayDynamicRouting#fallback}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.false">false</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse">AiGatewayDynamicRoutingElementsOutputsFalse</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#false AiGatewayDynamicRouting#false}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.next">next</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext">AiGatewayDynamicRoutingElementsOutputsNext</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#next AiGatewayDynamicRouting#next}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.success">success</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess">AiGatewayDynamicRoutingElementsOutputsSuccess</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#success AiGatewayDynamicRouting#success}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.true">true</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue">AiGatewayDynamicRoutingElementsOutputsTrue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#true AiGatewayDynamicRouting#true}. |

---

##### `element_id`<sup>Optional</sup> <a name="element_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.elementId"></a>

```python
element_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}.

---

##### `fallback`<sup>Optional</sup> <a name="fallback" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.fallback"></a>

```python
fallback: AiGatewayDynamicRoutingElementsOutputsFallback
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback">AiGatewayDynamicRoutingElementsOutputsFallback</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#fallback AiGatewayDynamicRouting#fallback}.

---

##### `false`<sup>Optional</sup> <a name="false" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.false"></a>

```python
false: AiGatewayDynamicRoutingElementsOutputsFalse
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse">AiGatewayDynamicRoutingElementsOutputsFalse</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#false AiGatewayDynamicRouting#false}.

---

##### `next`<sup>Optional</sup> <a name="next" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.next"></a>

```python
next: AiGatewayDynamicRoutingElementsOutputsNext
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext">AiGatewayDynamicRoutingElementsOutputsNext</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#next AiGatewayDynamicRouting#next}.

---

##### `success`<sup>Optional</sup> <a name="success" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.success"></a>

```python
success: AiGatewayDynamicRoutingElementsOutputsSuccess
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess">AiGatewayDynamicRoutingElementsOutputsSuccess</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#success AiGatewayDynamicRouting#success}.

---

##### `true`<sup>Optional</sup> <a name="true" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs.property.true"></a>

```python
true: AiGatewayDynamicRoutingElementsOutputsTrue
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue">AiGatewayDynamicRoutingElementsOutputsTrue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#true AiGatewayDynamicRouting#true}.

---

### AiGatewayDynamicRoutingElementsOutputsFallback <a name="AiGatewayDynamicRoutingElementsOutputsFallback" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback(
  element_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback.property.elementId">element_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}. |

---

##### `element_id`<sup>Required</sup> <a name="element_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback.property.elementId"></a>

```python
element_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}.

---

### AiGatewayDynamicRoutingElementsOutputsFalse <a name="AiGatewayDynamicRoutingElementsOutputsFalse" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse(
  element_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse.property.elementId">element_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}. |

---

##### `element_id`<sup>Required</sup> <a name="element_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse.property.elementId"></a>

```python
element_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}.

---

### AiGatewayDynamicRoutingElementsOutputsNext <a name="AiGatewayDynamicRoutingElementsOutputsNext" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext(
  element_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext.property.elementId">element_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}. |

---

##### `element_id`<sup>Required</sup> <a name="element_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext.property.elementId"></a>

```python
element_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}.

---

### AiGatewayDynamicRoutingElementsOutputsSuccess <a name="AiGatewayDynamicRoutingElementsOutputsSuccess" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess(
  element_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess.property.elementId">element_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}. |

---

##### `element_id`<sup>Required</sup> <a name="element_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess.property.elementId"></a>

```python
element_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}.

---

### AiGatewayDynamicRoutingElementsOutputsTrue <a name="AiGatewayDynamicRoutingElementsOutputsTrue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue(
  element_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue.property.elementId">element_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}. |

---

##### `element_id`<sup>Required</sup> <a name="element_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue.property.elementId"></a>

```python
element_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}.

---

### AiGatewayDynamicRoutingElementsProperties <a name="AiGatewayDynamicRoutingElementsProperties" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties(
  ai_gateway_dynamic_routing_provider: str = None,
  conditions: str = None,
  key: str = None,
  limit: typing.Union[int, float] = None,
  limit_type: str = None,
  model: str = None,
  retries: typing.Union[int, float] = None,
  timeout: typing.Union[int, float] = None,
  window: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.aiGatewayDynamicRoutingProvider">ai_gateway_dynamic_routing_provider</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#ai_gateway_dynamic_routing_provider AiGatewayDynamicRouting#ai_gateway_dynamic_routing_provider}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.conditions">conditions</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#conditions AiGatewayDynamicRouting#conditions}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#key AiGatewayDynamicRouting#key}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#limit AiGatewayDynamicRouting#limit}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.limitType">limit_type</a></code> | <code>str</code> | Available values: "count", "cost". |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.model">model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#model AiGatewayDynamicRouting#model}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#retries AiGatewayDynamicRouting#retries}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#timeout AiGatewayDynamicRouting#timeout}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.window">window</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#window AiGatewayDynamicRouting#window}. |

---

##### `ai_gateway_dynamic_routing_provider`<sup>Optional</sup> <a name="ai_gateway_dynamic_routing_provider" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.aiGatewayDynamicRoutingProvider"></a>

```python
ai_gateway_dynamic_routing_provider: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#ai_gateway_dynamic_routing_provider AiGatewayDynamicRouting#ai_gateway_dynamic_routing_provider}.

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.conditions"></a>

```python
conditions: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#conditions AiGatewayDynamicRouting#conditions}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#key AiGatewayDynamicRouting#key}.

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#limit AiGatewayDynamicRouting#limit}.

---

##### `limit_type`<sup>Optional</sup> <a name="limit_type" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.limitType"></a>

```python
limit_type: str
```

- *Type:* str

Available values: "count", "cost".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#limit_type AiGatewayDynamicRouting#limit_type}

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.model"></a>

```python
model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#model AiGatewayDynamicRouting#model}.

---

##### `retries`<sup>Optional</sup> <a name="retries" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#retries AiGatewayDynamicRouting#retries}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#timeout AiGatewayDynamicRouting#timeout}.

---

##### `window`<sup>Optional</sup> <a name="window" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties.property.window"></a>

```python
window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#window AiGatewayDynamicRouting#window}.

---

### AiGatewayDynamicRoutingRoute <a name="AiGatewayDynamicRoutingRoute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRoute.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingRoute()
```


### AiGatewayDynamicRoutingRouteDeployment <a name="AiGatewayDynamicRoutingRouteDeployment" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeployment.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeployment()
```


### AiGatewayDynamicRoutingRouteElements <a name="AiGatewayDynamicRoutingRouteElements" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElements.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElements()
```


### AiGatewayDynamicRoutingRouteElementsOutputs <a name="AiGatewayDynamicRoutingRouteElementsOutputs" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputs.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputs()
```


### AiGatewayDynamicRoutingRouteElementsOutputsFallback <a name="AiGatewayDynamicRoutingRouteElementsOutputsFallback" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallback.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallback()
```


### AiGatewayDynamicRoutingRouteElementsOutputsFalse <a name="AiGatewayDynamicRoutingRouteElementsOutputsFalse" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalse.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalse()
```


### AiGatewayDynamicRoutingRouteElementsOutputsNext <a name="AiGatewayDynamicRoutingRouteElementsOutputsNext" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNext.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNext()
```


### AiGatewayDynamicRoutingRouteElementsOutputsSuccess <a name="AiGatewayDynamicRoutingRouteElementsOutputsSuccess" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccess.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccess()
```


### AiGatewayDynamicRoutingRouteElementsOutputsTrue <a name="AiGatewayDynamicRoutingRouteElementsOutputsTrue" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrue.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrue()
```


### AiGatewayDynamicRoutingRouteElementsProperties <a name="AiGatewayDynamicRoutingRouteElementsProperties" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsProperties.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsProperties()
```


### AiGatewayDynamicRoutingRouteVersion <a name="AiGatewayDynamicRoutingRouteVersion" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersion.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersion()
```


### AiGatewayDynamicRoutingVersion <a name="AiGatewayDynamicRoutingVersion" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersion.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersion()
```


## Classes <a name="Classes" id="Classes"></a>

### AiGatewayDynamicRoutingDeploymentOutputReference <a name="AiGatewayDynamicRoutingDeploymentOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.deploymentId">deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.versionId">version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeployment">AiGatewayDynamicRoutingDeployment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeploymentOutputReference.property.internalValue"></a>

```python
internal_value: AiGatewayDynamicRoutingDeployment
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingDeployment">AiGatewayDynamicRoutingDeployment</a>

---


### AiGatewayDynamicRoutingElementsList <a name="AiGatewayDynamicRoutingElementsList" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AiGatewayDynamicRoutingElementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements">AiGatewayDynamicRoutingElements</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AiGatewayDynamicRoutingElements]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements">AiGatewayDynamicRoutingElements</a>]

---


### AiGatewayDynamicRoutingElementsOutputReference <a name="AiGatewayDynamicRoutingElementsOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.putOutputs">put_outputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.putProperties">put_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.resetProperties">reset_properties</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_outputs` <a name="put_outputs" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.putOutputs"></a>

```python
def put_outputs(
  element_id: str = None,
  fallback: AiGatewayDynamicRoutingElementsOutputsFallback = None,
  false: AiGatewayDynamicRoutingElementsOutputsFalse = None,
  next: AiGatewayDynamicRoutingElementsOutputsNext = None,
  success: AiGatewayDynamicRoutingElementsOutputsSuccess = None,
  true: AiGatewayDynamicRoutingElementsOutputsTrue = None
) -> None
```

###### `element_id`<sup>Optional</sup> <a name="element_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.putOutputs.parameter.elementId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}.

---

###### `fallback`<sup>Optional</sup> <a name="fallback" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.putOutputs.parameter.fallback"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback">AiGatewayDynamicRoutingElementsOutputsFallback</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#fallback AiGatewayDynamicRouting#fallback}.

---

###### `false`<sup>Optional</sup> <a name="false" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.putOutputs.parameter.false"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse">AiGatewayDynamicRoutingElementsOutputsFalse</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#false AiGatewayDynamicRouting#false}.

---

###### `next`<sup>Optional</sup> <a name="next" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.putOutputs.parameter.next"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext">AiGatewayDynamicRoutingElementsOutputsNext</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#next AiGatewayDynamicRouting#next}.

---

###### `success`<sup>Optional</sup> <a name="success" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.putOutputs.parameter.success"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess">AiGatewayDynamicRoutingElementsOutputsSuccess</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#success AiGatewayDynamicRouting#success}.

---

###### `true`<sup>Optional</sup> <a name="true" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.putOutputs.parameter.true"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue">AiGatewayDynamicRoutingElementsOutputsTrue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#true AiGatewayDynamicRouting#true}.

---

##### `put_properties` <a name="put_properties" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.putProperties"></a>

```python
def put_properties(
  ai_gateway_dynamic_routing_provider: str = None,
  conditions: str = None,
  key: str = None,
  limit: typing.Union[int, float] = None,
  limit_type: str = None,
  model: str = None,
  retries: typing.Union[int, float] = None,
  timeout: typing.Union[int, float] = None,
  window: typing.Union[int, float] = None
) -> None
```

###### `ai_gateway_dynamic_routing_provider`<sup>Optional</sup> <a name="ai_gateway_dynamic_routing_provider" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.putProperties.parameter.aiGatewayDynamicRoutingProvider"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#ai_gateway_dynamic_routing_provider AiGatewayDynamicRouting#ai_gateway_dynamic_routing_provider}.

---

###### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.putProperties.parameter.conditions"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#conditions AiGatewayDynamicRouting#conditions}.

---

###### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.putProperties.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#key AiGatewayDynamicRouting#key}.

---

###### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.putProperties.parameter.limit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#limit AiGatewayDynamicRouting#limit}.

---

###### `limit_type`<sup>Optional</sup> <a name="limit_type" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.putProperties.parameter.limitType"></a>

- *Type:* str

Available values: "count", "cost".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#limit_type AiGatewayDynamicRouting#limit_type}

---

###### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.putProperties.parameter.model"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#model AiGatewayDynamicRouting#model}.

---

###### `retries`<sup>Optional</sup> <a name="retries" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.putProperties.parameter.retries"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#retries AiGatewayDynamicRouting#retries}.

---

###### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.putProperties.parameter.timeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#timeout AiGatewayDynamicRouting#timeout}.

---

###### `window`<sup>Optional</sup> <a name="window" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.putProperties.parameter.window"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#window AiGatewayDynamicRouting#window}.

---

##### `reset_properties` <a name="reset_properties" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.outputs">outputs</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference">AiGatewayDynamicRoutingElementsOutputsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference">AiGatewayDynamicRoutingElementsPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.outputsInput">outputs_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs">AiGatewayDynamicRoutingElementsOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.propertiesInput">properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties">AiGatewayDynamicRoutingElementsProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements">AiGatewayDynamicRoutingElements</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.outputs"></a>

```python
outputs: AiGatewayDynamicRoutingElementsOutputsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference">AiGatewayDynamicRoutingElementsOutputsOutputReference</a>

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.properties"></a>

```python
properties: AiGatewayDynamicRoutingElementsPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference">AiGatewayDynamicRoutingElementsPropertiesOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `outputs_input`<sup>Optional</sup> <a name="outputs_input" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.outputsInput"></a>

```python
outputs_input: IResolvable | AiGatewayDynamicRoutingElementsOutputs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs">AiGatewayDynamicRoutingElementsOutputs</a>

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.propertiesInput"></a>

```python
properties_input: IResolvable | AiGatewayDynamicRoutingElementsProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties">AiGatewayDynamicRoutingElementsProperties</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayDynamicRoutingElements
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElements">AiGatewayDynamicRoutingElements</a>

---


### AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference <a name="AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.elementIdInput">element_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.elementId">element_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback">AiGatewayDynamicRoutingElementsOutputsFallback</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `element_id_input`<sup>Optional</sup> <a name="element_id_input" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.elementIdInput"></a>

```python
element_id_input: str
```

- *Type:* str

---

##### `element_id`<sup>Required</sup> <a name="element_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.elementId"></a>

```python
element_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayDynamicRoutingElementsOutputsFallback
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback">AiGatewayDynamicRoutingElementsOutputsFallback</a>

---


### AiGatewayDynamicRoutingElementsOutputsFalseOutputReference <a name="AiGatewayDynamicRoutingElementsOutputsFalseOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.elementIdInput">element_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.elementId">element_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse">AiGatewayDynamicRoutingElementsOutputsFalse</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `element_id_input`<sup>Optional</sup> <a name="element_id_input" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.elementIdInput"></a>

```python
element_id_input: str
```

- *Type:* str

---

##### `element_id`<sup>Required</sup> <a name="element_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.elementId"></a>

```python
element_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayDynamicRoutingElementsOutputsFalse
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse">AiGatewayDynamicRoutingElementsOutputsFalse</a>

---


### AiGatewayDynamicRoutingElementsOutputsNextOutputReference <a name="AiGatewayDynamicRoutingElementsOutputsNextOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.elementIdInput">element_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.elementId">element_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext">AiGatewayDynamicRoutingElementsOutputsNext</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `element_id_input`<sup>Optional</sup> <a name="element_id_input" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.elementIdInput"></a>

```python
element_id_input: str
```

- *Type:* str

---

##### `element_id`<sup>Required</sup> <a name="element_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.elementId"></a>

```python
element_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayDynamicRoutingElementsOutputsNext
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext">AiGatewayDynamicRoutingElementsOutputsNext</a>

---


### AiGatewayDynamicRoutingElementsOutputsOutputReference <a name="AiGatewayDynamicRoutingElementsOutputsOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putFallback">put_fallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putFalse">put_false</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putNext">put_next</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putSuccess">put_success</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putTrue">put_true</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetElementId">reset_element_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetFallback">reset_fallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetFalse">reset_false</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetNext">reset_next</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetSuccess">reset_success</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetTrue">reset_true</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_fallback` <a name="put_fallback" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putFallback"></a>

```python
def put_fallback(
  element_id: str
) -> None
```

###### `element_id`<sup>Required</sup> <a name="element_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putFallback.parameter.elementId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}.

---

##### `put_false` <a name="put_false" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putFalse"></a>

```python
def put_false(
  element_id: str
) -> None
```

###### `element_id`<sup>Required</sup> <a name="element_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putFalse.parameter.elementId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}.

---

##### `put_next` <a name="put_next" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putNext"></a>

```python
def put_next(
  element_id: str
) -> None
```

###### `element_id`<sup>Required</sup> <a name="element_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putNext.parameter.elementId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}.

---

##### `put_success` <a name="put_success" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putSuccess"></a>

```python
def put_success(
  element_id: str
) -> None
```

###### `element_id`<sup>Required</sup> <a name="element_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putSuccess.parameter.elementId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}.

---

##### `put_true` <a name="put_true" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putTrue"></a>

```python
def put_true(
  element_id: str
) -> None
```

###### `element_id`<sup>Required</sup> <a name="element_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.putTrue.parameter.elementId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/ai_gateway_dynamic_routing#element_id AiGatewayDynamicRouting#element_id}.

---

##### `reset_element_id` <a name="reset_element_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetElementId"></a>

```python
def reset_element_id() -> None
```

##### `reset_fallback` <a name="reset_fallback" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetFallback"></a>

```python
def reset_fallback() -> None
```

##### `reset_false` <a name="reset_false" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetFalse"></a>

```python
def reset_false() -> None
```

##### `reset_next` <a name="reset_next" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetNext"></a>

```python
def reset_next() -> None
```

##### `reset_success` <a name="reset_success" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetSuccess"></a>

```python
def reset_success() -> None
```

##### `reset_true` <a name="reset_true" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.resetTrue"></a>

```python
def reset_true() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.fallback">fallback</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference">AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.false">false</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference">AiGatewayDynamicRoutingElementsOutputsFalseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.next">next</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference">AiGatewayDynamicRoutingElementsOutputsNextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.success">success</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference">AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.true">true</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference">AiGatewayDynamicRoutingElementsOutputsTrueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.elementIdInput">element_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.fallbackInput">fallback_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback">AiGatewayDynamicRoutingElementsOutputsFallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.falseInput">false_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse">AiGatewayDynamicRoutingElementsOutputsFalse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.nextInput">next_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext">AiGatewayDynamicRoutingElementsOutputsNext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.successInput">success_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess">AiGatewayDynamicRoutingElementsOutputsSuccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.trueInput">true_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue">AiGatewayDynamicRoutingElementsOutputsTrue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.elementId">element_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs">AiGatewayDynamicRoutingElementsOutputs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fallback`<sup>Required</sup> <a name="fallback" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.fallback"></a>

```python
fallback: AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference">AiGatewayDynamicRoutingElementsOutputsFallbackOutputReference</a>

---

##### `false`<sup>Required</sup> <a name="false" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.false"></a>

```python
false: AiGatewayDynamicRoutingElementsOutputsFalseOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalseOutputReference">AiGatewayDynamicRoutingElementsOutputsFalseOutputReference</a>

---

##### `next`<sup>Required</sup> <a name="next" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.next"></a>

```python
next: AiGatewayDynamicRoutingElementsOutputsNextOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNextOutputReference">AiGatewayDynamicRoutingElementsOutputsNextOutputReference</a>

---

##### `success`<sup>Required</sup> <a name="success" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.success"></a>

```python
success: AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference">AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference</a>

---

##### `true`<sup>Required</sup> <a name="true" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.true"></a>

```python
true: AiGatewayDynamicRoutingElementsOutputsTrueOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference">AiGatewayDynamicRoutingElementsOutputsTrueOutputReference</a>

---

##### `element_id_input`<sup>Optional</sup> <a name="element_id_input" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.elementIdInput"></a>

```python
element_id_input: str
```

- *Type:* str

---

##### `fallback_input`<sup>Optional</sup> <a name="fallback_input" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.fallbackInput"></a>

```python
fallback_input: IResolvable | AiGatewayDynamicRoutingElementsOutputsFallback
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFallback">AiGatewayDynamicRoutingElementsOutputsFallback</a>

---

##### `false_input`<sup>Optional</sup> <a name="false_input" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.falseInput"></a>

```python
false_input: IResolvable | AiGatewayDynamicRoutingElementsOutputsFalse
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsFalse">AiGatewayDynamicRoutingElementsOutputsFalse</a>

---

##### `next_input`<sup>Optional</sup> <a name="next_input" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.nextInput"></a>

```python
next_input: IResolvable | AiGatewayDynamicRoutingElementsOutputsNext
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsNext">AiGatewayDynamicRoutingElementsOutputsNext</a>

---

##### `success_input`<sup>Optional</sup> <a name="success_input" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.successInput"></a>

```python
success_input: IResolvable | AiGatewayDynamicRoutingElementsOutputsSuccess
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess">AiGatewayDynamicRoutingElementsOutputsSuccess</a>

---

##### `true_input`<sup>Optional</sup> <a name="true_input" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.trueInput"></a>

```python
true_input: IResolvable | AiGatewayDynamicRoutingElementsOutputsTrue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue">AiGatewayDynamicRoutingElementsOutputsTrue</a>

---

##### `element_id`<sup>Required</sup> <a name="element_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.elementId"></a>

```python
element_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayDynamicRoutingElementsOutputs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputs">AiGatewayDynamicRoutingElementsOutputs</a>

---


### AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference <a name="AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.elementIdInput">element_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.elementId">element_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess">AiGatewayDynamicRoutingElementsOutputsSuccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `element_id_input`<sup>Optional</sup> <a name="element_id_input" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.elementIdInput"></a>

```python
element_id_input: str
```

- *Type:* str

---

##### `element_id`<sup>Required</sup> <a name="element_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.elementId"></a>

```python
element_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccessOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayDynamicRoutingElementsOutputsSuccess
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsSuccess">AiGatewayDynamicRoutingElementsOutputsSuccess</a>

---


### AiGatewayDynamicRoutingElementsOutputsTrueOutputReference <a name="AiGatewayDynamicRoutingElementsOutputsTrueOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.elementIdInput">element_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.elementId">element_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue">AiGatewayDynamicRoutingElementsOutputsTrue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `element_id_input`<sup>Optional</sup> <a name="element_id_input" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.elementIdInput"></a>

```python
element_id_input: str
```

- *Type:* str

---

##### `element_id`<sup>Required</sup> <a name="element_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.elementId"></a>

```python
element_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrueOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayDynamicRoutingElementsOutputsTrue
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsOutputsTrue">AiGatewayDynamicRoutingElementsOutputsTrue</a>

---


### AiGatewayDynamicRoutingElementsPropertiesOutputReference <a name="AiGatewayDynamicRoutingElementsPropertiesOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetAiGatewayDynamicRoutingProvider">reset_ai_gateway_dynamic_routing_provider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetConditions">reset_conditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetLimit">reset_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetLimitType">reset_limit_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetModel">reset_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetRetries">reset_retries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetWindow">reset_window</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ai_gateway_dynamic_routing_provider` <a name="reset_ai_gateway_dynamic_routing_provider" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetAiGatewayDynamicRoutingProvider"></a>

```python
def reset_ai_gateway_dynamic_routing_provider() -> None
```

##### `reset_conditions` <a name="reset_conditions" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetConditions"></a>

```python
def reset_conditions() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_limit` <a name="reset_limit" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetLimit"></a>

```python
def reset_limit() -> None
```

##### `reset_limit_type` <a name="reset_limit_type" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetLimitType"></a>

```python
def reset_limit_type() -> None
```

##### `reset_model` <a name="reset_model" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetModel"></a>

```python
def reset_model() -> None
```

##### `reset_retries` <a name="reset_retries" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetRetries"></a>

```python
def reset_retries() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```

##### `reset_window` <a name="reset_window" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.resetWindow"></a>

```python
def reset_window() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.aiGatewayDynamicRoutingProviderInput">ai_gateway_dynamic_routing_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.conditionsInput">conditions_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.limitInput">limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.limitTypeInput">limit_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.modelInput">model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.retriesInput">retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.windowInput">window_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.aiGatewayDynamicRoutingProvider">ai_gateway_dynamic_routing_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.conditions">conditions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.limitType">limit_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.model">model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.window">window</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties">AiGatewayDynamicRoutingElementsProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ai_gateway_dynamic_routing_provider_input`<sup>Optional</sup> <a name="ai_gateway_dynamic_routing_provider_input" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.aiGatewayDynamicRoutingProviderInput"></a>

```python
ai_gateway_dynamic_routing_provider_input: str
```

- *Type:* str

---

##### `conditions_input`<sup>Optional</sup> <a name="conditions_input" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.conditionsInput"></a>

```python
conditions_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `limit_input`<sup>Optional</sup> <a name="limit_input" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.limitInput"></a>

```python
limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `limit_type_input`<sup>Optional</sup> <a name="limit_type_input" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.limitTypeInput"></a>

```python
limit_type_input: str
```

- *Type:* str

---

##### `model_input`<sup>Optional</sup> <a name="model_input" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.modelInput"></a>

```python
model_input: str
```

- *Type:* str

---

##### `retries_input`<sup>Optional</sup> <a name="retries_input" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.retriesInput"></a>

```python
retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `window_input`<sup>Optional</sup> <a name="window_input" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.windowInput"></a>

```python
window_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ai_gateway_dynamic_routing_provider`<sup>Required</sup> <a name="ai_gateway_dynamic_routing_provider" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.aiGatewayDynamicRoutingProvider"></a>

```python
ai_gateway_dynamic_routing_provider: str
```

- *Type:* str

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.conditions"></a>

```python
conditions: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `limit_type`<sup>Required</sup> <a name="limit_type" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.limitType"></a>

```python
limit_type: str
```

- *Type:* str

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.model"></a>

```python
model: str
```

- *Type:* str

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `window`<sup>Required</sup> <a name="window" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.window"></a>

```python
window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayDynamicRoutingElementsProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingElementsProperties">AiGatewayDynamicRoutingElementsProperties</a>

---


### AiGatewayDynamicRoutingRouteDeploymentOutputReference <a name="AiGatewayDynamicRoutingRouteDeploymentOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.deploymentId">deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.versionId">version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeployment">AiGatewayDynamicRoutingRouteDeployment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference.property.internalValue"></a>

```python
internal_value: AiGatewayDynamicRoutingRouteDeployment
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeployment">AiGatewayDynamicRoutingRouteDeployment</a>

---


### AiGatewayDynamicRoutingRouteElementsList <a name="AiGatewayDynamicRoutingRouteElementsList" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AiGatewayDynamicRoutingRouteElementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### AiGatewayDynamicRoutingRouteElementsOutputReference <a name="AiGatewayDynamicRoutingRouteElementsOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.outputs">outputs</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference">AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElements">AiGatewayDynamicRoutingRouteElements</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.outputs"></a>

```python
outputs: AiGatewayDynamicRoutingRouteElementsOutputsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsOutputReference</a>

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.properties"></a>

```python
properties: AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference">AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputReference.property.internalValue"></a>

```python
internal_value: AiGatewayDynamicRoutingRouteElements
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElements">AiGatewayDynamicRoutingRouteElements</a>

---


### AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference <a name="AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.property.elementId">element_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallback">AiGatewayDynamicRoutingRouteElementsOutputsFallback</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `element_id`<sup>Required</sup> <a name="element_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.property.elementId"></a>

```python
element_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference.property.internalValue"></a>

```python
internal_value: AiGatewayDynamicRoutingRouteElementsOutputsFallback
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallback">AiGatewayDynamicRoutingRouteElementsOutputsFallback</a>

---


### AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference <a name="AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.property.elementId">element_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalse">AiGatewayDynamicRoutingRouteElementsOutputsFalse</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `element_id`<sup>Required</sup> <a name="element_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.property.elementId"></a>

```python
element_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference.property.internalValue"></a>

```python
internal_value: AiGatewayDynamicRoutingRouteElementsOutputsFalse
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalse">AiGatewayDynamicRoutingRouteElementsOutputsFalse</a>

---


### AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference <a name="AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.property.elementId">element_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNext">AiGatewayDynamicRoutingRouteElementsOutputsNext</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `element_id`<sup>Required</sup> <a name="element_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.property.elementId"></a>

```python
element_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference.property.internalValue"></a>

```python
internal_value: AiGatewayDynamicRoutingRouteElementsOutputsNext
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNext">AiGatewayDynamicRoutingRouteElementsOutputsNext</a>

---


### AiGatewayDynamicRoutingRouteElementsOutputsOutputReference <a name="AiGatewayDynamicRoutingRouteElementsOutputsOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.elementId">element_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.fallback">fallback</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.false">false</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.next">next</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.success">success</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.true">true</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputs">AiGatewayDynamicRoutingRouteElementsOutputs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `element_id`<sup>Required</sup> <a name="element_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.elementId"></a>

```python
element_id: str
```

- *Type:* str

---

##### `fallback`<sup>Required</sup> <a name="fallback" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.fallback"></a>

```python
fallback: AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsFallbackOutputReference</a>

---

##### `false`<sup>Required</sup> <a name="false" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.false"></a>

```python
false: AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsFalseOutputReference</a>

---

##### `next`<sup>Required</sup> <a name="next" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.next"></a>

```python
next: AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsNextOutputReference</a>

---

##### `success`<sup>Required</sup> <a name="success" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.success"></a>

```python
success: AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference</a>

---

##### `true`<sup>Required</sup> <a name="true" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.true"></a>

```python
true: AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference">AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsOutputReference.property.internalValue"></a>

```python
internal_value: AiGatewayDynamicRoutingRouteElementsOutputs
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputs">AiGatewayDynamicRoutingRouteElementsOutputs</a>

---


### AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference <a name="AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.property.elementId">element_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccess">AiGatewayDynamicRoutingRouteElementsOutputsSuccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `element_id`<sup>Required</sup> <a name="element_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.property.elementId"></a>

```python
element_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccessOutputReference.property.internalValue"></a>

```python
internal_value: AiGatewayDynamicRoutingRouteElementsOutputsSuccess
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsSuccess">AiGatewayDynamicRoutingRouteElementsOutputsSuccess</a>

---


### AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference <a name="AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.property.elementId">element_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrue">AiGatewayDynamicRoutingRouteElementsOutputsTrue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `element_id`<sup>Required</sup> <a name="element_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.property.elementId"></a>

```python
element_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrueOutputReference.property.internalValue"></a>

```python
internal_value: AiGatewayDynamicRoutingRouteElementsOutputsTrue
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsOutputsTrue">AiGatewayDynamicRoutingRouteElementsOutputsTrue</a>

---


### AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference <a name="AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.aiGatewayDynamicRoutingProvider">ai_gateway_dynamic_routing_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.conditions">conditions</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.limitType">limit_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.model">model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.retries">retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.window">window</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsProperties">AiGatewayDynamicRoutingRouteElementsProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ai_gateway_dynamic_routing_provider`<sup>Required</sup> <a name="ai_gateway_dynamic_routing_provider" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.aiGatewayDynamicRoutingProvider"></a>

```python
ai_gateway_dynamic_routing_provider: str
```

- *Type:* str

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.conditions"></a>

```python
conditions: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `limit_type`<sup>Required</sup> <a name="limit_type" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.limitType"></a>

```python
limit_type: str
```

- *Type:* str

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.model"></a>

```python
model: str
```

- *Type:* str

---

##### `retries`<sup>Required</sup> <a name="retries" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.retries"></a>

```python
retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `window`<sup>Required</sup> <a name="window" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.window"></a>

```python
window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: AiGatewayDynamicRoutingRouteElementsProperties
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsProperties">AiGatewayDynamicRoutingRouteElementsProperties</a>

---


### AiGatewayDynamicRoutingRouteOutputReference <a name="AiGatewayDynamicRoutingRouteOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.accountTag">account_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.deployment">deployment</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference">AiGatewayDynamicRoutingRouteDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.elements">elements</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList">AiGatewayDynamicRoutingRouteElementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.gatewayId">gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.version">version</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference">AiGatewayDynamicRoutingRouteVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRoute">AiGatewayDynamicRoutingRoute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_tag`<sup>Required</sup> <a name="account_tag" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.accountTag"></a>

```python
account_tag: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.deployment"></a>

```python
deployment: AiGatewayDynamicRoutingRouteDeploymentOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteDeploymentOutputReference">AiGatewayDynamicRoutingRouteDeploymentOutputReference</a>

---

##### `elements`<sup>Required</sup> <a name="elements" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.elements"></a>

```python
elements: AiGatewayDynamicRoutingRouteElementsList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteElementsList">AiGatewayDynamicRoutingRouteElementsList</a>

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.version"></a>

```python
version: AiGatewayDynamicRoutingRouteVersionOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference">AiGatewayDynamicRoutingRouteVersionOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteOutputReference.property.internalValue"></a>

```python
internal_value: AiGatewayDynamicRoutingRoute
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRoute">AiGatewayDynamicRoutingRoute</a>

---


### AiGatewayDynamicRoutingRouteVersionOutputReference <a name="AiGatewayDynamicRoutingRouteVersionOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.active">active</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.data">data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.isValid">is_valid</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.versionId">version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersion">AiGatewayDynamicRoutingRouteVersion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.active"></a>

```python
active: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.data"></a>

```python
data: str
```

- *Type:* str

---

##### `is_valid`<sup>Required</sup> <a name="is_valid" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.isValid"></a>

```python
is_valid: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersionOutputReference.property.internalValue"></a>

```python
internal_value: AiGatewayDynamicRoutingRouteVersion
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingRouteVersion">AiGatewayDynamicRoutingRouteVersion</a>

---


### AiGatewayDynamicRoutingVersionOutputReference <a name="AiGatewayDynamicRoutingVersionOutputReference" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway_dynamic_routing

aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.active">active</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.data">data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.isValid">is_valid</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.versionId">version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersion">AiGatewayDynamicRoutingVersion</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.active"></a>

```python
active: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.data"></a>

```python
data: str
```

- *Type:* str

---

##### `is_valid`<sup>Required</sup> <a name="is_valid" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.isValid"></a>

```python
is_valid: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `version_id`<sup>Required</sup> <a name="version_id" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.versionId"></a>

```python
version_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersionOutputReference.property.internalValue"></a>

```python
internal_value: AiGatewayDynamicRoutingVersion
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGatewayDynamicRouting.AiGatewayDynamicRoutingVersion">AiGatewayDynamicRoutingVersion</a>

---



