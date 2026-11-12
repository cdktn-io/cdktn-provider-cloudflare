# `zeroTrustCwsDeployment` Submodule <a name="`zeroTrustCwsDeployment` Submodule" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustCwsDeployment <a name="ZeroTrustCwsDeployment" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment cloudflare_zero_trust_cws_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_cws_deployment

zeroTrustCwsDeployment.ZeroTrustCwsDeployment(
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
  basic_auth_credential_ids: typing.List[str],
  default_mode: str,
  name: str,
  policy_set_ids: typing.List[str],
  description: str = None,
  domain_acl_id: str = None,
  on_error_action: str = None,
  rego_raise_error: bool | IResolvable = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.basicAuthCredentialIds">basic_auth_credential_ids</a></code> | <code>typing.List[str]</code> | IDs of basic-auth credentials to attach. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.defaultMode">default_mode</a></code> | <code>str</code> | Default traffic mode: ALLOW or BLOCK Available values: "ALLOW", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the deployment. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.policySetIds">policy_set_ids</a></code> | <code>typing.List[str]</code> | IDs of policy sets to attach. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.description">description</a></code> | <code>str</code> | Optional free-form description. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.domainAclId">domain_acl_id</a></code> | <code>str</code> | ID of the domain ACL to attach (omit or null for none). |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.onErrorAction">on_error_action</a></code> | <code>str</code> | Action for runtime Rego errors. Omit to use BLOCK. Available values: "BLOCK", "SKIP". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.regoRaiseError">rego_raise_error</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether OPA builtin failures are raised as runtime evaluation errors. Omit to use the default true value. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Tags to attach. Keys are limited to 256 UTF-8 bytes and values to 1024 UTF-8 bytes. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.accountId"></a>

- *Type:* str

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#account_id ZeroTrustCwsDeployment#account_id}

---

##### `basic_auth_credential_ids`<sup>Required</sup> <a name="basic_auth_credential_ids" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.basicAuthCredentialIds"></a>

- *Type:* typing.List[str]

IDs of basic-auth credentials to attach.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#basic_auth_credential_ids ZeroTrustCwsDeployment#basic_auth_credential_ids}

---

##### `default_mode`<sup>Required</sup> <a name="default_mode" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.defaultMode"></a>

- *Type:* str

Default traffic mode: ALLOW or BLOCK Available values: "ALLOW", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#default_mode ZeroTrustCwsDeployment#default_mode}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.name"></a>

- *Type:* str

Name of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#name ZeroTrustCwsDeployment#name}

---

##### `policy_set_ids`<sup>Required</sup> <a name="policy_set_ids" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.policySetIds"></a>

- *Type:* typing.List[str]

IDs of policy sets to attach.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#policy_set_ids ZeroTrustCwsDeployment#policy_set_ids}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.description"></a>

- *Type:* str

Optional free-form description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#description ZeroTrustCwsDeployment#description}

---

##### `domain_acl_id`<sup>Optional</sup> <a name="domain_acl_id" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.domainAclId"></a>

- *Type:* str

ID of the domain ACL to attach (omit or null for none).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#domain_acl_id ZeroTrustCwsDeployment#domain_acl_id}

---

##### `on_error_action`<sup>Optional</sup> <a name="on_error_action" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.onErrorAction"></a>

- *Type:* str

Action for runtime Rego errors. Omit to use BLOCK. Available values: "BLOCK", "SKIP".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#on_error_action ZeroTrustCwsDeployment#on_error_action}

---

##### `rego_raise_error`<sup>Optional</sup> <a name="rego_raise_error" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.regoRaiseError"></a>

- *Type:* bool | cdktn.IResolvable

Whether OPA builtin failures are raised as runtime evaluation errors. Omit to use the default true value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#rego_raise_error ZeroTrustCwsDeployment#rego_raise_error}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Tags to attach. Keys are limited to 256 UTF-8 bytes and values to 1024 UTF-8 bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#tags ZeroTrustCwsDeployment#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetDomainAclId">reset_domain_acl_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetOnErrorAction">reset_on_error_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetRegoRaiseError">reset_rego_raise_error</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_domain_acl_id` <a name="reset_domain_acl_id" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetDomainAclId"></a>

```python
def reset_domain_acl_id() -> None
```

##### `reset_on_error_action` <a name="reset_on_error_action" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetOnErrorAction"></a>

```python
def reset_on_error_action() -> None
```

##### `reset_rego_raise_error` <a name="reset_rego_raise_error" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetRegoRaiseError"></a>

```python
def reset_rego_raise_error() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ZeroTrustCwsDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.isConstruct"></a>

```python
from cdktn_provider_cloudflare import zero_trust_cws_deployment

zeroTrustCwsDeployment.ZeroTrustCwsDeployment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import zero_trust_cws_deployment

zeroTrustCwsDeployment.ZeroTrustCwsDeployment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.isTerraformResource"></a>

```python
from cdktn_provider_cloudflare import zero_trust_cws_deployment

zeroTrustCwsDeployment.ZeroTrustCwsDeployment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import zero_trust_cws_deployment

zeroTrustCwsDeployment.ZeroTrustCwsDeployment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ZeroTrustCwsDeployment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ZeroTrustCwsDeployment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ZeroTrustCwsDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustCwsDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.basicAuthCredentialIdsInput">basic_auth_credential_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.defaultModeInput">default_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.domainAclIdInput">domain_acl_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.onErrorActionInput">on_error_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.policySetIdsInput">policy_set_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.regoRaiseErrorInput">rego_raise_error_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.basicAuthCredentialIds">basic_auth_credential_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.defaultMode">default_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.domainAclId">domain_acl_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.onErrorAction">on_error_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.policySetIds">policy_set_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.regoRaiseError">rego_raise_error</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `basic_auth_credential_ids_input`<sup>Optional</sup> <a name="basic_auth_credential_ids_input" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.basicAuthCredentialIdsInput"></a>

```python
basic_auth_credential_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_mode_input`<sup>Optional</sup> <a name="default_mode_input" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.defaultModeInput"></a>

```python
default_mode_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `domain_acl_id_input`<sup>Optional</sup> <a name="domain_acl_id_input" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.domainAclIdInput"></a>

```python
domain_acl_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `on_error_action_input`<sup>Optional</sup> <a name="on_error_action_input" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.onErrorActionInput"></a>

```python
on_error_action_input: str
```

- *Type:* str

---

##### `policy_set_ids_input`<sup>Optional</sup> <a name="policy_set_ids_input" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.policySetIdsInput"></a>

```python
policy_set_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rego_raise_error_input`<sup>Optional</sup> <a name="rego_raise_error_input" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.regoRaiseErrorInput"></a>

```python
rego_raise_error_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `basic_auth_credential_ids`<sup>Required</sup> <a name="basic_auth_credential_ids" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.basicAuthCredentialIds"></a>

```python
basic_auth_credential_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_mode`<sup>Required</sup> <a name="default_mode" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.defaultMode"></a>

```python
default_mode: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain_acl_id`<sup>Required</sup> <a name="domain_acl_id" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.domainAclId"></a>

```python
domain_acl_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `on_error_action`<sup>Required</sup> <a name="on_error_action" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.onErrorAction"></a>

```python
on_error_action: str
```

- *Type:* str

---

##### `policy_set_ids`<sup>Required</sup> <a name="policy_set_ids" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.policySetIds"></a>

```python
policy_set_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rego_raise_error`<sup>Required</sup> <a name="rego_raise_error" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.regoRaiseError"></a>

```python
rego_raise_error: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustCwsDeploymentConfig <a name="ZeroTrustCwsDeploymentConfig" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_cws_deployment

zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  basic_auth_credential_ids: typing.List[str],
  default_mode: str,
  name: str,
  policy_set_ids: typing.List[str],
  description: str = None,
  domain_acl_id: str = None,
  on_error_action: str = None,
  rego_raise_error: bool | IResolvable = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.accountId">account_id</a></code> | <code>str</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.basicAuthCredentialIds">basic_auth_credential_ids</a></code> | <code>typing.List[str]</code> | IDs of basic-auth credentials to attach. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.defaultMode">default_mode</a></code> | <code>str</code> | Default traffic mode: ALLOW or BLOCK Available values: "ALLOW", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.name">name</a></code> | <code>str</code> | Name of the deployment. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.policySetIds">policy_set_ids</a></code> | <code>typing.List[str]</code> | IDs of policy sets to attach. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.description">description</a></code> | <code>str</code> | Optional free-form description. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.domainAclId">domain_acl_id</a></code> | <code>str</code> | ID of the domain ACL to attach (omit or null for none). |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.onErrorAction">on_error_action</a></code> | <code>str</code> | Action for runtime Rego errors. Omit to use BLOCK. Available values: "BLOCK", "SKIP". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.regoRaiseError">rego_raise_error</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether OPA builtin failures are raised as runtime evaluation errors. Omit to use the default true value. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Tags to attach. Keys are limited to 256 UTF-8 bytes and values to 1024 UTF-8 bytes. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#account_id ZeroTrustCwsDeployment#account_id}

---

##### `basic_auth_credential_ids`<sup>Required</sup> <a name="basic_auth_credential_ids" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.basicAuthCredentialIds"></a>

```python
basic_auth_credential_ids: typing.List[str]
```

- *Type:* typing.List[str]

IDs of basic-auth credentials to attach.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#basic_auth_credential_ids ZeroTrustCwsDeployment#basic_auth_credential_ids}

---

##### `default_mode`<sup>Required</sup> <a name="default_mode" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.defaultMode"></a>

```python
default_mode: str
```

- *Type:* str

Default traffic mode: ALLOW or BLOCK Available values: "ALLOW", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#default_mode ZeroTrustCwsDeployment#default_mode}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#name ZeroTrustCwsDeployment#name}

---

##### `policy_set_ids`<sup>Required</sup> <a name="policy_set_ids" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.policySetIds"></a>

```python
policy_set_ids: typing.List[str]
```

- *Type:* typing.List[str]

IDs of policy sets to attach.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#policy_set_ids ZeroTrustCwsDeployment#policy_set_ids}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Optional free-form description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#description ZeroTrustCwsDeployment#description}

---

##### `domain_acl_id`<sup>Optional</sup> <a name="domain_acl_id" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.domainAclId"></a>

```python
domain_acl_id: str
```

- *Type:* str

ID of the domain ACL to attach (omit or null for none).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#domain_acl_id ZeroTrustCwsDeployment#domain_acl_id}

---

##### `on_error_action`<sup>Optional</sup> <a name="on_error_action" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.onErrorAction"></a>

```python
on_error_action: str
```

- *Type:* str

Action for runtime Rego errors. Omit to use BLOCK. Available values: "BLOCK", "SKIP".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#on_error_action ZeroTrustCwsDeployment#on_error_action}

---

##### `rego_raise_error`<sup>Optional</sup> <a name="rego_raise_error" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.regoRaiseError"></a>

```python
rego_raise_error: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether OPA builtin failures are raised as runtime evaluation errors. Omit to use the default true value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#rego_raise_error ZeroTrustCwsDeployment#rego_raise_error}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Tags to attach. Keys are limited to 256 UTF-8 bytes and values to 1024 UTF-8 bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#tags ZeroTrustCwsDeployment#tags}

---



