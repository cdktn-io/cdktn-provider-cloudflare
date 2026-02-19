# `zeroTrustRiskScoringIntegration` Submodule <a name="`zeroTrustRiskScoringIntegration` Submodule" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustRiskScoringIntegration <a name="ZeroTrustRiskScoringIntegration" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_risk_scoring_integration cloudflare_zero_trust_risk_scoring_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_risk_scoring_integration

zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration(
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
  integration_type: str,
  tenant_url: str,
  active: bool | IResolvable = None,
  reference_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_risk_scoring_integration#account_id ZeroTrustRiskScoringIntegration#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.Initializer.parameter.integrationType">integration_type</a></code> | <code>str</code> | Available values: "Okta". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.Initializer.parameter.tenantUrl">tenant_url</a></code> | <code>str</code> | The base url of the tenant, e.g. "https://tenant.okta.com". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.Initializer.parameter.active">active</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether this integration is enabled. If disabled, no risk changes will be exported to the third-party. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.Initializer.parameter.referenceId">reference_id</a></code> | <code>str</code> | A reference id that can be supplied by the client. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_risk_scoring_integration#account_id ZeroTrustRiskScoringIntegration#account_id}.

---

##### `integration_type`<sup>Required</sup> <a name="integration_type" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.Initializer.parameter.integrationType"></a>

- *Type:* str

Available values: "Okta".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_risk_scoring_integration#integration_type ZeroTrustRiskScoringIntegration#integration_type}

---

##### `tenant_url`<sup>Required</sup> <a name="tenant_url" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.Initializer.parameter.tenantUrl"></a>

- *Type:* str

The base url of the tenant, e.g. "https://tenant.okta.com".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_risk_scoring_integration#tenant_url ZeroTrustRiskScoringIntegration#tenant_url}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.Initializer.parameter.active"></a>

- *Type:* bool | cdktn.IResolvable

Whether this integration is enabled. If disabled, no risk changes will be exported to the third-party.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_risk_scoring_integration#active ZeroTrustRiskScoringIntegration#active}

---

##### `reference_id`<sup>Optional</sup> <a name="reference_id" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.Initializer.parameter.referenceId"></a>

- *Type:* str

A reference id that can be supplied by the client.

Currently this should be set to the Access-Okta IDP ID (a UUIDv4).
https://developers.cloudflare.com/api/operations/access-identity-providers-get-an-access-identity-provider

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_risk_scoring_integration#reference_id ZeroTrustRiskScoringIntegration#reference_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.resetActive">reset_active</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.resetReferenceId">reset_reference_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_active` <a name="reset_active" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.resetActive"></a>

```python
def reset_active() -> None
```

##### `reset_reference_id` <a name="reset_reference_id" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.resetReferenceId"></a>

```python
def reset_reference_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ZeroTrustRiskScoringIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.isConstruct"></a>

```python
from cdktn_provider_cloudflare import zero_trust_risk_scoring_integration

zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import zero_trust_risk_scoring_integration

zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.isTerraformResource"></a>

```python
from cdktn_provider_cloudflare import zero_trust_risk_scoring_integration

zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import zero_trust_risk_scoring_integration

zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ZeroTrustRiskScoringIntegration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ZeroTrustRiskScoringIntegration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ZeroTrustRiskScoringIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_risk_scoring_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustRiskScoringIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.accountTag">account_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.wellKnownUrl">well_known_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.activeInput">active_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.integrationTypeInput">integration_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.referenceIdInput">reference_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.tenantUrlInput">tenant_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.active">active</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.integrationType">integration_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.referenceId">reference_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.tenantUrl">tenant_url</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_tag`<sup>Required</sup> <a name="account_tag" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.accountTag"></a>

```python
account_tag: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `well_known_url`<sup>Required</sup> <a name="well_known_url" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.wellKnownUrl"></a>

```python
well_known_url: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `active_input`<sup>Optional</sup> <a name="active_input" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.activeInput"></a>

```python
active_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `integration_type_input`<sup>Optional</sup> <a name="integration_type_input" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.integrationTypeInput"></a>

```python
integration_type_input: str
```

- *Type:* str

---

##### `reference_id_input`<sup>Optional</sup> <a name="reference_id_input" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.referenceIdInput"></a>

```python
reference_id_input: str
```

- *Type:* str

---

##### `tenant_url_input`<sup>Optional</sup> <a name="tenant_url_input" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.tenantUrlInput"></a>

```python
tenant_url_input: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.active"></a>

```python
active: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `integration_type`<sup>Required</sup> <a name="integration_type" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.integrationType"></a>

```python
integration_type: str
```

- *Type:* str

---

##### `reference_id`<sup>Required</sup> <a name="reference_id" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.referenceId"></a>

```python
reference_id: str
```

- *Type:* str

---

##### `tenant_url`<sup>Required</sup> <a name="tenant_url" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.tenantUrl"></a>

```python
tenant_url: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustRiskScoringIntegrationConfig <a name="ZeroTrustRiskScoringIntegrationConfig" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import zero_trust_risk_scoring_integration

zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  integration_type: str,
  tenant_url: str,
  active: bool | IResolvable = None,
  reference_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_risk_scoring_integration#account_id ZeroTrustRiskScoringIntegration#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.integrationType">integration_type</a></code> | <code>str</code> | Available values: "Okta". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.tenantUrl">tenant_url</a></code> | <code>str</code> | The base url of the tenant, e.g. "https://tenant.okta.com". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.active">active</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether this integration is enabled. If disabled, no risk changes will be exported to the third-party. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.referenceId">reference_id</a></code> | <code>str</code> | A reference id that can be supplied by the client. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_risk_scoring_integration#account_id ZeroTrustRiskScoringIntegration#account_id}.

---

##### `integration_type`<sup>Required</sup> <a name="integration_type" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.integrationType"></a>

```python
integration_type: str
```

- *Type:* str

Available values: "Okta".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_risk_scoring_integration#integration_type ZeroTrustRiskScoringIntegration#integration_type}

---

##### `tenant_url`<sup>Required</sup> <a name="tenant_url" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.tenantUrl"></a>

```python
tenant_url: str
```

- *Type:* str

The base url of the tenant, e.g. "https://tenant.okta.com".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_risk_scoring_integration#tenant_url ZeroTrustRiskScoringIntegration#tenant_url}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.active"></a>

```python
active: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether this integration is enabled. If disabled, no risk changes will be exported to the third-party.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_risk_scoring_integration#active ZeroTrustRiskScoringIntegration#active}

---

##### `reference_id`<sup>Optional</sup> <a name="reference_id" id="@cdktn/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.referenceId"></a>

```python
reference_id: str
```

- *Type:* str

A reference id that can be supplied by the client.

Currently this should be set to the Access-Okta IDP ID (a UUIDv4).
https://developers.cloudflare.com/api/operations/access-identity-providers-get-an-access-identity-provider

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/zero_trust_risk_scoring_integration#reference_id ZeroTrustRiskScoringIntegration#reference_id}

---



