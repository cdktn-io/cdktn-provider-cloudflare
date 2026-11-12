# `zeroTrustCwsPolicySet` Submodule <a name="`zeroTrustCwsPolicySet` Submodule" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustCwsPolicySet <a name="ZeroTrustCwsPolicySet" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy_set cloudflare_zero_trust_cws_policy_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_cws_policy_set

zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet(
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
  policies: IResolvable | typing.List[ZeroTrustCwsPolicySetPolicies],
  description: str = None,
  exclude_workload_ids: typing.List[str] = None,
  include_workload_ids: typing.List[str] = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the policy set. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer.parameter.policies">policies</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies">ZeroTrustCwsPolicySetPolicies</a>]</code> | Policies to include with per-membership enforcement mode. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer.parameter.description">description</a></code> | <code>str</code> | Optional free-form description. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer.parameter.excludeWorkloadIds">exclude_workload_ids</a></code> | <code>typing.List[str]</code> | Workload IDs that exclude matching requests. Exclusions take precedence. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer.parameter.includeWorkloadIds">include_workload_ids</a></code> | <code>typing.List[str]</code> | Workload IDs that include matching requests. Empty or omitted includes all requests before exclusions. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Tags to attach. Keys are limited to 256 UTF-8 bytes and values to 1024 UTF-8 bytes. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer.parameter.accountId"></a>

- *Type:* str

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy_set#account_id ZeroTrustCwsPolicySet#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer.parameter.name"></a>

- *Type:* str

Name of the policy set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy_set#name ZeroTrustCwsPolicySet#name}

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer.parameter.policies"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies">ZeroTrustCwsPolicySetPolicies</a>]

Policies to include with per-membership enforcement mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy_set#policies ZeroTrustCwsPolicySet#policies}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer.parameter.description"></a>

- *Type:* str

Optional free-form description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy_set#description ZeroTrustCwsPolicySet#description}

---

##### `exclude_workload_ids`<sup>Optional</sup> <a name="exclude_workload_ids" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer.parameter.excludeWorkloadIds"></a>

- *Type:* typing.List[str]

Workload IDs that exclude matching requests. Exclusions take precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy_set#exclude_workload_ids ZeroTrustCwsPolicySet#exclude_workload_ids}

---

##### `include_workload_ids`<sup>Optional</sup> <a name="include_workload_ids" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer.parameter.includeWorkloadIds"></a>

- *Type:* typing.List[str]

Workload IDs that include matching requests. Empty or omitted includes all requests before exclusions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy_set#include_workload_ids ZeroTrustCwsPolicySet#include_workload_ids}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Tags to attach. Keys are limited to 256 UTF-8 bytes and values to 1024 UTF-8 bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy_set#tags ZeroTrustCwsPolicySet#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.putPolicies">put_policies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.resetExcludeWorkloadIds">reset_exclude_workload_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.resetIncludeWorkloadIds">reset_include_workload_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_policies` <a name="put_policies" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.putPolicies"></a>

```python
def put_policies(
  value: IResolvable | typing.List[ZeroTrustCwsPolicySetPolicies]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.putPolicies.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies">ZeroTrustCwsPolicySetPolicies</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_exclude_workload_ids` <a name="reset_exclude_workload_ids" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.resetExcludeWorkloadIds"></a>

```python
def reset_exclude_workload_ids() -> None
```

##### `reset_include_workload_ids` <a name="reset_include_workload_ids" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.resetIncludeWorkloadIds"></a>

```python
def reset_include_workload_ids() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ZeroTrustCwsPolicySet resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.isConstruct"></a>

```python
from cdktn_provider_cloudflare import zero_trust_cws_policy_set

zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import zero_trust_cws_policy_set

zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.isTerraformResource"></a>

```python
from cdktn_provider_cloudflare import zero_trust_cws_policy_set

zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import zero_trust_cws_policy_set

zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ZeroTrustCwsPolicySet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ZeroTrustCwsPolicySet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ZeroTrustCwsPolicySet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustCwsPolicySet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.policies">policies</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList">ZeroTrustCwsPolicySetPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.excludeWorkloadIdsInput">exclude_workload_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.includeWorkloadIdsInput">include_workload_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.policiesInput">policies_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies">ZeroTrustCwsPolicySetPolicies</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.excludeWorkloadIds">exclude_workload_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.includeWorkloadIds">include_workload_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.policies"></a>

```python
policies: ZeroTrustCwsPolicySetPoliciesList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList">ZeroTrustCwsPolicySetPoliciesList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `exclude_workload_ids_input`<sup>Optional</sup> <a name="exclude_workload_ids_input" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.excludeWorkloadIdsInput"></a>

```python
exclude_workload_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_workload_ids_input`<sup>Optional</sup> <a name="include_workload_ids_input" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.includeWorkloadIdsInput"></a>

```python
include_workload_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `policies_input`<sup>Optional</sup> <a name="policies_input" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.policiesInput"></a>

```python
policies_input: IResolvable | typing.List[ZeroTrustCwsPolicySetPolicies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies">ZeroTrustCwsPolicySetPolicies</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `exclude_workload_ids`<sup>Required</sup> <a name="exclude_workload_ids" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.excludeWorkloadIds"></a>

```python
exclude_workload_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_workload_ids`<sup>Required</sup> <a name="include_workload_ids" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.includeWorkloadIds"></a>

```python
include_workload_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustCwsPolicySetConfig <a name="ZeroTrustCwsPolicySetConfig" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_cws_policy_set

zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  name: str,
  policies: IResolvable | typing.List[ZeroTrustCwsPolicySetPolicies],
  description: str = None,
  exclude_workload_ids: typing.List[str] = None,
  include_workload_ids: typing.List[str] = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.accountId">account_id</a></code> | <code>str</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.name">name</a></code> | <code>str</code> | Name of the policy set. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.policies">policies</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies">ZeroTrustCwsPolicySetPolicies</a>]</code> | Policies to include with per-membership enforcement mode. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.description">description</a></code> | <code>str</code> | Optional free-form description. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.excludeWorkloadIds">exclude_workload_ids</a></code> | <code>typing.List[str]</code> | Workload IDs that exclude matching requests. Exclusions take precedence. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.includeWorkloadIds">include_workload_ids</a></code> | <code>typing.List[str]</code> | Workload IDs that include matching requests. Empty or omitted includes all requests before exclusions. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Tags to attach. Keys are limited to 256 UTF-8 bytes and values to 1024 UTF-8 bytes. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy_set#account_id ZeroTrustCwsPolicySet#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the policy set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy_set#name ZeroTrustCwsPolicySet#name}

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.policies"></a>

```python
policies: IResolvable | typing.List[ZeroTrustCwsPolicySetPolicies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies">ZeroTrustCwsPolicySetPolicies</a>]

Policies to include with per-membership enforcement mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy_set#policies ZeroTrustCwsPolicySet#policies}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Optional free-form description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy_set#description ZeroTrustCwsPolicySet#description}

---

##### `exclude_workload_ids`<sup>Optional</sup> <a name="exclude_workload_ids" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.excludeWorkloadIds"></a>

```python
exclude_workload_ids: typing.List[str]
```

- *Type:* typing.List[str]

Workload IDs that exclude matching requests. Exclusions take precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy_set#exclude_workload_ids ZeroTrustCwsPolicySet#exclude_workload_ids}

---

##### `include_workload_ids`<sup>Optional</sup> <a name="include_workload_ids" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.includeWorkloadIds"></a>

```python
include_workload_ids: typing.List[str]
```

- *Type:* typing.List[str]

Workload IDs that include matching requests. Empty or omitted includes all requests before exclusions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy_set#include_workload_ids ZeroTrustCwsPolicySet#include_workload_ids}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Tags to attach. Keys are limited to 256 UTF-8 bytes and values to 1024 UTF-8 bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy_set#tags ZeroTrustCwsPolicySet#tags}

---

### ZeroTrustCwsPolicySetPolicies <a name="ZeroTrustCwsPolicySetPolicies" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_cws_policy_set

zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies(
  policy_id: str,
  enforce: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies.property.policyId">policy_id</a></code> | <code>str</code> | ID of the member policy. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies.property.enforce">enforce</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether this policy should enforce when it matches. Defaults to true; false keeps the policy attached for non-enforcing evaluation. |

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

ID of the member policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy_set#policy_id ZeroTrustCwsPolicySet#policy_id}

---

##### `enforce`<sup>Optional</sup> <a name="enforce" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies.property.enforce"></a>

```python
enforce: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether this policy should enforce when it matches. Defaults to true; false keeps the policy attached for non-enforcing evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy_set#enforce ZeroTrustCwsPolicySet#enforce}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustCwsPolicySetPoliciesList <a name="ZeroTrustCwsPolicySetPoliciesList" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_cws_policy_set

zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ZeroTrustCwsPolicySetPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies">ZeroTrustCwsPolicySetPolicies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ZeroTrustCwsPolicySetPolicies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies">ZeroTrustCwsPolicySetPolicies</a>]

---


### ZeroTrustCwsPolicySetPoliciesOutputReference <a name="ZeroTrustCwsPolicySetPoliciesOutputReference" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_cws_policy_set

zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.resetEnforce">reset_enforce</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enforce` <a name="reset_enforce" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.resetEnforce"></a>

```python
def reset_enforce() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.property.enforceInput">enforce_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.property.policyIdInput">policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.property.enforce">enforce</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies">ZeroTrustCwsPolicySetPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enforce_input`<sup>Optional</sup> <a name="enforce_input" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.property.enforceInput"></a>

```python
enforce_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `policy_id_input`<sup>Optional</sup> <a name="policy_id_input" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.property.policyIdInput"></a>

```python
policy_id_input: str
```

- *Type:* str

---

##### `enforce`<sup>Required</sup> <a name="enforce" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.property.enforce"></a>

```python
enforce: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ZeroTrustCwsPolicySetPolicies
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies">ZeroTrustCwsPolicySetPolicies</a>

---



