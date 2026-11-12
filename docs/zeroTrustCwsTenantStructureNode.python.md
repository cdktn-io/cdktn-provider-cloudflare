# `zeroTrustCwsTenantStructureNode` Submodule <a name="`zeroTrustCwsTenantStructureNode` Submodule" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustCwsTenantStructureNode <a name="ZeroTrustCwsTenantStructureNode" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node cloudflare_zero_trust_cws_tenant_structure_node}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_cws_tenant_structure_node

zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode(
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
  native_id: str,
  node_kind: str,
  structure_id: str,
  name: str = None,
  parent: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.nativeId">native_id</a></code> | <code>str</code> | Cloud-native identifier of this node, unique within the structure; |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.nodeKind">node_kind</a></code> | <code>str</code> | Position in the tree. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.structureId">structure_id</a></code> | <code>str</code> | ID of the parent tenant structure. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.name">name</a></code> | <code>str</code> | Display name (e.g. an OU or account name), mutable. Optional; empty by default. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.parent">parent</a></code> | <code>str</code> | Native ID of this node's parent. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.accountId"></a>

- *Type:* str

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node#account_id ZeroTrustCwsTenantStructureNode#account_id}

---

##### `native_id`<sup>Required</sup> <a name="native_id" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.nativeId"></a>

- *Type:* str

Cloud-native identifier of this node, unique within the structure;

the parent-reference target. Shape depends on the structure's application. Immutable after create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node#native_id ZeroTrustCwsTenantStructureNode#native_id}

---

##### `node_kind`<sup>Required</sup> <a name="node_kind" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.nodeKind"></a>

- *Type:* str

Position in the tree.

Legal values depend on the structure's application (aws: root/ou/account; cloudflare: org/account/zone). At most one root per structure. Immutable after create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node#node_kind ZeroTrustCwsTenantStructureNode#node_kind}

---

##### `structure_id`<sup>Required</sup> <a name="structure_id" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.structureId"></a>

- *Type:* str

ID of the parent tenant structure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node#structure_id ZeroTrustCwsTenantStructureNode#structure_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.name"></a>

- *Type:* str

Display name (e.g. an OU or account name), mutable. Optional; empty by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node#name ZeroTrustCwsTenantStructureNode#name}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.Initializer.parameter.parent"></a>

- *Type:* str

Native ID of this node's parent.

Required for non-root nodes and omitted for the root. The parent must be in the same structure and able to contain this node kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node#parent ZeroTrustCwsTenantStructureNode#parent}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.resetParent">reset_parent</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_name` <a name="reset_name" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_parent` <a name="reset_parent" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.resetParent"></a>

```python
def reset_parent() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ZeroTrustCwsTenantStructureNode resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.isConstruct"></a>

```python
from cdktn_provider_cloudflare import zero_trust_cws_tenant_structure_node

zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import zero_trust_cws_tenant_structure_node

zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.isTerraformResource"></a>

```python
from cdktn_provider_cloudflare import zero_trust_cws_tenant_structure_node

zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import zero_trust_cws_tenant_structure_node

zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ZeroTrustCwsTenantStructureNode resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ZeroTrustCwsTenantStructureNode to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ZeroTrustCwsTenantStructureNode that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustCwsTenantStructureNode to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.nativeIdInput">native_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.nodeKindInput">node_kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.structureIdInput">structure_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.nativeId">native_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.nodeKind">node_kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.structureId">structure_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `native_id_input`<sup>Optional</sup> <a name="native_id_input" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.nativeIdInput"></a>

```python
native_id_input: str
```

- *Type:* str

---

##### `node_kind_input`<sup>Optional</sup> <a name="node_kind_input" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.nodeKindInput"></a>

```python
node_kind_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `structure_id_input`<sup>Optional</sup> <a name="structure_id_input" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.structureIdInput"></a>

```python
structure_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `native_id`<sup>Required</sup> <a name="native_id" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.nativeId"></a>

```python
native_id: str
```

- *Type:* str

---

##### `node_kind`<sup>Required</sup> <a name="node_kind" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.nodeKind"></a>

```python
node_kind: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `structure_id`<sup>Required</sup> <a name="structure_id" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.structureId"></a>

```python
structure_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNode.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustCwsTenantStructureNodeConfig <a name="ZeroTrustCwsTenantStructureNodeConfig" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_cws_tenant_structure_node

zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  native_id: str,
  node_kind: str,
  structure_id: str,
  name: str = None,
  parent: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.accountId">account_id</a></code> | <code>str</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.nativeId">native_id</a></code> | <code>str</code> | Cloud-native identifier of this node, unique within the structure; |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.nodeKind">node_kind</a></code> | <code>str</code> | Position in the tree. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.structureId">structure_id</a></code> | <code>str</code> | ID of the parent tenant structure. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.name">name</a></code> | <code>str</code> | Display name (e.g. an OU or account name), mutable. Optional; empty by default. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.parent">parent</a></code> | <code>str</code> | Native ID of this node's parent. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node#account_id ZeroTrustCwsTenantStructureNode#account_id}

---

##### `native_id`<sup>Required</sup> <a name="native_id" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.nativeId"></a>

```python
native_id: str
```

- *Type:* str

Cloud-native identifier of this node, unique within the structure;

the parent-reference target. Shape depends on the structure's application. Immutable after create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node#native_id ZeroTrustCwsTenantStructureNode#native_id}

---

##### `node_kind`<sup>Required</sup> <a name="node_kind" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.nodeKind"></a>

```python
node_kind: str
```

- *Type:* str

Position in the tree.

Legal values depend on the structure's application (aws: root/ou/account; cloudflare: org/account/zone). At most one root per structure. Immutable after create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node#node_kind ZeroTrustCwsTenantStructureNode#node_kind}

---

##### `structure_id`<sup>Required</sup> <a name="structure_id" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.structureId"></a>

```python
structure_id: str
```

- *Type:* str

ID of the parent tenant structure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node#structure_id ZeroTrustCwsTenantStructureNode#structure_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Display name (e.g. an OU or account name), mutable. Optional; empty by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node#name ZeroTrustCwsTenantStructureNode#name}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktn/provider-cloudflare.zeroTrustCwsTenantStructureNode.ZeroTrustCwsTenantStructureNodeConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

Native ID of this node's parent.

Required for non-root nodes and omitted for the root. The parent must be in the same structure and able to contain this node kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_tenant_structure_node#parent ZeroTrustCwsTenantStructureNode#parent}

---



