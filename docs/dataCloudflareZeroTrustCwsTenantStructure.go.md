# `dataCloudflareZeroTrustCwsTenantStructure` Submodule <a name="`dataCloudflareZeroTrustCwsTenantStructure` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustCwsTenantStructure <a name="DataCloudflareZeroTrustCwsTenantStructure" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure cloudflare_zero_trust_cws_tenant_structure}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwstenantstructure"

datacloudflarezerotrustcwstenantstructure.NewDataCloudflareZeroTrustCwsTenantStructure(scope Construct, id *string, config DataCloudflareZeroTrustCwsTenantStructureConfig) DataCloudflareZeroTrustCwsTenantStructure
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureConfig">DataCloudflareZeroTrustCwsTenantStructureConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureConfig">DataCloudflareZeroTrustCwsTenantStructureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.resetStructureId">ResetStructureId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.putFilter"></a>

```go
func PutFilter(value DataCloudflareZeroTrustCwsTenantStructureFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilter">DataCloudflareZeroTrustCwsTenantStructureFilter</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetStructureId` <a name="ResetStructureId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.resetStructureId"></a>

```go
func ResetStructureId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustCwsTenantStructure resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwstenantstructure"

datacloudflarezerotrustcwstenantstructure.DataCloudflareZeroTrustCwsTenantStructure_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwstenantstructure"

datacloudflarezerotrustcwstenantstructure.DataCloudflareZeroTrustCwsTenantStructure_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwstenantstructure"

datacloudflarezerotrustcwstenantstructure.DataCloudflareZeroTrustCwsTenantStructure_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwstenantstructure"

datacloudflarezerotrustcwstenantstructure.DataCloudflareZeroTrustCwsTenantStructure_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataCloudflareZeroTrustCwsTenantStructure resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareZeroTrustCwsTenantStructure to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareZeroTrustCwsTenantStructure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustCwsTenantStructure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.application">Application</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference">DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.importPath">ImportPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.structureIdInput">StructureIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.structureId">StructureId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Application`<sup>Required</sup> <a name="Application" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.application"></a>

```go
func Application() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.filter"></a>

```go
func Filter() DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference">DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImportPath`<sup>Required</sup> <a name="ImportPath" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.importPath"></a>

```go
func ImportPath() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `StructureIdInput`<sup>Optional</sup> <a name="StructureIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.structureIdInput"></a>

```go
func StructureIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `StructureId`<sup>Required</sup> <a name="StructureId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.structureId"></a>

```go
func StructureId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructure.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustCwsTenantStructureConfig <a name="DataCloudflareZeroTrustCwsTenantStructureConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwstenantstructure"

&datacloudflarezerotrustcwstenantstructure.DataCloudflareZeroTrustCwsTenantStructureConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Filter: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilter,
	StructureId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureConfig.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilter">DataCloudflareZeroTrustCwsTenantStructureFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure#filter DataCloudflareZeroTrustCwsTenantStructure#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureConfig.property.structureId">StructureId</a></code> | <code>*string</code> | ID of the tenant structure to retrieve. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure#account_id DataCloudflareZeroTrustCwsTenantStructure#account_id}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureConfig.property.filter"></a>

```go
Filter DataCloudflareZeroTrustCwsTenantStructureFilter
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilter">DataCloudflareZeroTrustCwsTenantStructureFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure#filter DataCloudflareZeroTrustCwsTenantStructure#filter}.

---

##### `StructureId`<sup>Optional</sup> <a name="StructureId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureConfig.property.structureId"></a>

```go
StructureId *string
```

- *Type:* *string

ID of the tenant structure to retrieve.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure#structure_id DataCloudflareZeroTrustCwsTenantStructure#structure_id}

---

### DataCloudflareZeroTrustCwsTenantStructureFilter <a name="DataCloudflareZeroTrustCwsTenantStructureFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwstenantstructure"

&datacloudflarezerotrustcwstenantstructure.DataCloudflareZeroTrustCwsTenantStructureFilter {
	Direction: *string,
	ImportPath: *string,
	Name: *string,
	Order: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilter.property.direction">Direction</a></code> | <code>*string</code> | Sort direction (default: asc) Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilter.property.importPath">ImportPath</a></code> | <code>*string</code> | Filter by import path (case-sensitive literal substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilter.property.name">Name</a></code> | <code>*string</code> | Filter by tenant structure name (case-insensitive substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilter.property.order">Order</a></code> | <code>*string</code> | Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at". |

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilter.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

Sort direction (default: asc) Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure#direction DataCloudflareZeroTrustCwsTenantStructure#direction}

---

##### `ImportPath`<sup>Optional</sup> <a name="ImportPath" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilter.property.importPath"></a>

```go
ImportPath *string
```

- *Type:* *string

Filter by import path (case-sensitive literal substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure#import_path DataCloudflareZeroTrustCwsTenantStructure#import_path}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Filter by tenant structure name (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure#name DataCloudflareZeroTrustCwsTenantStructure#name}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilter.property.order"></a>

```go
Order *string
```

- *Type:* *string

Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure#order DataCloudflareZeroTrustCwsTenantStructure#order}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference <a name="DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v17/datacloudflarezerotrustcwstenantstructure"

datacloudflarezerotrustcwstenantstructure.NewDataCloudflareZeroTrustCwsTenantStructureFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.resetImportPath">ResetImportPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDirection` <a name="ResetDirection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.resetDirection"></a>

```go
func ResetDirection()
```

##### `ResetImportPath` <a name="ResetImportPath" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.resetImportPath"></a>

```go
func ResetImportPath()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.resetOrder"></a>

```go
func ResetOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.property.importPathInput">ImportPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.property.orderInput">OrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.property.importPath">ImportPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.property.order">Order</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `ImportPathInput`<sup>Optional</sup> <a name="ImportPathInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.property.importPathInput"></a>

```go
func ImportPathInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.property.orderInput"></a>

```go
func OrderInput() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `ImportPath`<sup>Required</sup> <a name="ImportPath" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.property.importPath"></a>

```go
func ImportPath() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.property.order"></a>

```go
func Order() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructure.DataCloudflareZeroTrustCwsTenantStructureFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



