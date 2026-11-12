# `dataCloudflareZeroTrustCwsPolicySets` Submodule <a name="`dataCloudflareZeroTrustCwsPolicySets` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustCwsPolicySets <a name="DataCloudflareZeroTrustCwsPolicySets" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy_sets cloudflare_zero_trust_cws_policy_sets}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwspolicysets"

datacloudflarezerotrustcwspolicysets.NewDataCloudflareZeroTrustCwsPolicySets(scope Construct, id *string, config DataCloudflareZeroTrustCwsPolicySetsConfig) DataCloudflareZeroTrustCwsPolicySets
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig">DataCloudflareZeroTrustCwsPolicySetsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig">DataCloudflareZeroTrustCwsPolicySetsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.resetDeploymentId">ResetDeploymentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.resetOrder">ResetOrder</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDeploymentId` <a name="ResetDeploymentId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.resetDeploymentId"></a>

```go
func ResetDeploymentId()
```

##### `ResetDirection` <a name="ResetDirection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.resetDirection"></a>

```go
func ResetDirection()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.resetMaxItems"></a>

```go
func ResetMaxItems()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.resetName"></a>

```go
func ResetName()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.resetOrder"></a>

```go
func ResetOrder()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustCwsPolicySets resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwspolicysets"

datacloudflarezerotrustcwspolicysets.DataCloudflareZeroTrustCwsPolicySets_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwspolicysets"

datacloudflarezerotrustcwspolicysets.DataCloudflareZeroTrustCwsPolicySets_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwspolicysets"

datacloudflarezerotrustcwspolicysets.DataCloudflareZeroTrustCwsPolicySets_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwspolicysets"

datacloudflarezerotrustcwspolicysets.DataCloudflareZeroTrustCwsPolicySets_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataCloudflareZeroTrustCwsPolicySets resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareZeroTrustCwsPolicySets to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareZeroTrustCwsPolicySets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy_sets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustCwsPolicySets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.result">Result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList">DataCloudflareZeroTrustCwsPolicySetsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.deploymentIdInput">DeploymentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.maxItemsInput">MaxItemsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.orderInput">OrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.deploymentId">DeploymentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.maxItems">MaxItems</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.order">Order</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.result"></a>

```go
func Result() DataCloudflareZeroTrustCwsPolicySetsResultList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList">DataCloudflareZeroTrustCwsPolicySetsResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `DeploymentIdInput`<sup>Optional</sup> <a name="DeploymentIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.deploymentIdInput"></a>

```go
func DeploymentIdInput() *string
```

- *Type:* *string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.maxItemsInput"></a>

```go
func MaxItemsInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.orderInput"></a>

```go
func OrderInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.deploymentId"></a>

```go
func DeploymentId() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.maxItems"></a>

```go
func MaxItems() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.order"></a>

```go
func Order() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySets.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustCwsPolicySetsConfig <a name="DataCloudflareZeroTrustCwsPolicySetsConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwspolicysets"

&datacloudflarezerotrustcwspolicysets.DataCloudflareZeroTrustCwsPolicySetsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	DeploymentId: *string,
	Direction: *string,
	MaxItems: *f64,
	Name: *string,
	Order: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.deploymentId">DeploymentId</a></code> | <code>*string</code> | Filter to policy sets attached to this deployment. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.direction">Direction</a></code> | <code>*string</code> | Sort direction (default: asc) Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.maxItems">MaxItems</a></code> | <code>*f64</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.name">Name</a></code> | <code>*string</code> | Filter by policy set name (case-insensitive substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.order">Order</a></code> | <code>*string</code> | Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at". |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy_sets#account_id DataCloudflareZeroTrustCwsPolicySets#account_id}

---

##### `DeploymentId`<sup>Optional</sup> <a name="DeploymentId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.deploymentId"></a>

```go
DeploymentId *string
```

- *Type:* *string

Filter to policy sets attached to this deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy_sets#deployment_id DataCloudflareZeroTrustCwsPolicySets#deployment_id}

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

Sort direction (default: asc) Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy_sets#direction DataCloudflareZeroTrustCwsPolicySets#direction}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.maxItems"></a>

```go
MaxItems *f64
```

- *Type:* *f64

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy_sets#max_items DataCloudflareZeroTrustCwsPolicySets#max_items}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Filter by policy set name (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy_sets#name DataCloudflareZeroTrustCwsPolicySets#name}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsConfig.property.order"></a>

```go
Order *string
```

- *Type:* *string

Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_policy_sets#order DataCloudflareZeroTrustCwsPolicySets#order}

---

### DataCloudflareZeroTrustCwsPolicySetsResult <a name="DataCloudflareZeroTrustCwsPolicySetsResult" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResult.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwspolicysets"

&datacloudflarezerotrustcwspolicysets.DataCloudflareZeroTrustCwsPolicySetsResult {

}
```


### DataCloudflareZeroTrustCwsPolicySetsResultPolicies <a name="DataCloudflareZeroTrustCwsPolicySetsResultPolicies" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPolicies.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwspolicysets"

&datacloudflarezerotrustcwspolicysets.DataCloudflareZeroTrustCwsPolicySetsResultPolicies {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustCwsPolicySetsResultList <a name="DataCloudflareZeroTrustCwsPolicySetsResultList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwspolicysets"

datacloudflarezerotrustcwspolicysets.NewDataCloudflareZeroTrustCwsPolicySetsResultList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareZeroTrustCwsPolicySetsResultList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.get"></a>

```go
func Get(index *f64) DataCloudflareZeroTrustCwsPolicySetsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareZeroTrustCwsPolicySetsResultOutputReference <a name="DataCloudflareZeroTrustCwsPolicySetsResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwspolicysets"

datacloudflarezerotrustcwspolicysets.NewDataCloudflareZeroTrustCwsPolicySetsResultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareZeroTrustCwsPolicySetsResultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.excludeWorkloadIds">ExcludeWorkloadIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.includeWorkloadIds">IncludeWorkloadIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.policies">Policies</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList">DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.tags">Tags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResult">DataCloudflareZeroTrustCwsPolicySetsResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExcludeWorkloadIds`<sup>Required</sup> <a name="ExcludeWorkloadIds" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.excludeWorkloadIds"></a>

```go
func ExcludeWorkloadIds() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IncludeWorkloadIds`<sup>Required</sup> <a name="IncludeWorkloadIds" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.includeWorkloadIds"></a>

```go
func IncludeWorkloadIds() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.policies"></a>

```go
func Policies() DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList">DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustCwsPolicySetsResult
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResult">DataCloudflareZeroTrustCwsPolicySetsResult</a>

---


### DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList <a name="DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwspolicysets"

datacloudflarezerotrustcwspolicysets.NewDataCloudflareZeroTrustCwsPolicySetsResultPoliciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.get"></a>

```go
func Get(index *f64) DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference <a name="DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwspolicysets"

datacloudflarezerotrustcwspolicysets.NewDataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.property.enforce">Enforce</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPolicies">DataCloudflareZeroTrustCwsPolicySetsResultPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enforce`<sup>Required</sup> <a name="Enforce" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.property.enforce"></a>

```go
func Enforce() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPoliciesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustCwsPolicySetsResultPolicies
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsPolicySets.DataCloudflareZeroTrustCwsPolicySetsResultPolicies">DataCloudflareZeroTrustCwsPolicySetsResultPolicies</a>

---



