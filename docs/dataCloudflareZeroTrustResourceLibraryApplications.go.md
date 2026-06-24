# `dataCloudflareZeroTrustResourceLibraryApplications` Submodule <a name="`dataCloudflareZeroTrustResourceLibraryApplications` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustResourceLibraryApplications <a name="DataCloudflareZeroTrustResourceLibraryApplications" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/zero_trust_resource_library_applications cloudflare_zero_trust_resource_library_applications}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarezerotrustresourcelibraryapplications"

datacloudflarezerotrustresourcelibraryapplications.NewDataCloudflareZeroTrustResourceLibraryApplications(scope Construct, id *string, config DataCloudflareZeroTrustResourceLibraryApplicationsConfig) DataCloudflareZeroTrustResourceLibraryApplications
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig">DataCloudflareZeroTrustResourceLibraryApplicationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig">DataCloudflareZeroTrustResourceLibraryApplicationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.resetLimit">ResetLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.resetOffset">ResetOffset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.resetOrderBy">ResetOrderBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.resetSearch">ResetSearch</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetLimit` <a name="ResetLimit" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.resetLimit"></a>

```go
func ResetLimit()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.resetMaxItems"></a>

```go
func ResetMaxItems()
```

##### `ResetOffset` <a name="ResetOffset" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.resetOffset"></a>

```go
func ResetOffset()
```

##### `ResetOrderBy` <a name="ResetOrderBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.resetOrderBy"></a>

```go
func ResetOrderBy()
```

##### `ResetSearch` <a name="ResetSearch" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.resetSearch"></a>

```go
func ResetSearch()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustResourceLibraryApplications resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarezerotrustresourcelibraryapplications"

datacloudflarezerotrustresourcelibraryapplications.DataCloudflareZeroTrustResourceLibraryApplications_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarezerotrustresourcelibraryapplications"

datacloudflarezerotrustresourcelibraryapplications.DataCloudflareZeroTrustResourceLibraryApplications_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarezerotrustresourcelibraryapplications"

datacloudflarezerotrustresourcelibraryapplications.DataCloudflareZeroTrustResourceLibraryApplications_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarezerotrustresourcelibraryapplications"

datacloudflarezerotrustresourcelibraryapplications.DataCloudflareZeroTrustResourceLibraryApplications_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataCloudflareZeroTrustResourceLibraryApplications resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareZeroTrustResourceLibraryApplications to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareZeroTrustResourceLibraryApplications that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/zero_trust_resource_library_applications#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustResourceLibraryApplications to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.result">Result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList">DataCloudflareZeroTrustResourceLibraryApplicationsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.limitInput">LimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.maxItemsInput">MaxItemsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.offsetInput">OffsetInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.orderByInput">OrderByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.searchInput">SearchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.limit">Limit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.maxItems">MaxItems</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.offset">Offset</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.orderBy">OrderBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.search">Search</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.result"></a>

```go
func Result() DataCloudflareZeroTrustResourceLibraryApplicationsResultList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList">DataCloudflareZeroTrustResourceLibraryApplicationsResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.limitInput"></a>

```go
func LimitInput() *f64
```

- *Type:* *f64

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.maxItemsInput"></a>

```go
func MaxItemsInput() *f64
```

- *Type:* *f64

---

##### `OffsetInput`<sup>Optional</sup> <a name="OffsetInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.offsetInput"></a>

```go
func OffsetInput() *f64
```

- *Type:* *f64

---

##### `OrderByInput`<sup>Optional</sup> <a name="OrderByInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.orderByInput"></a>

```go
func OrderByInput() *string
```

- *Type:* *string

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.searchInput"></a>

```go
func SearchInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.limit"></a>

```go
func Limit() *f64
```

- *Type:* *f64

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.maxItems"></a>

```go
func MaxItems() *f64
```

- *Type:* *f64

---

##### `Offset`<sup>Required</sup> <a name="Offset" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.offset"></a>

```go
func Offset() *f64
```

- *Type:* *f64

---

##### `OrderBy`<sup>Required</sup> <a name="OrderBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.orderBy"></a>

```go
func OrderBy() *string
```

- *Type:* *string

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.search"></a>

```go
func Search() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplications.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustResourceLibraryApplicationsConfig <a name="DataCloudflareZeroTrustResourceLibraryApplicationsConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarezerotrustresourcelibraryapplications"

&datacloudflarezerotrustresourcelibraryapplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Filter: *string,
	Limit: *f64,
	MaxItems: *f64,
	Offset: *f64,
	OrderBy: *string,
	Search: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/zero_trust_resource_library_applications#account_id DataCloudflareZeroTrustResourceLibraryApplications#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.filter">Filter</a></code> | <code>*string</code> | Filter applications using key:value format. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.limit">Limit</a></code> | <code>*f64</code> | Limit of number of results to return (max 250). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.maxItems">MaxItems</a></code> | <code>*f64</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.offset">Offset</a></code> | <code>*f64</code> | Offset of results to return. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.orderBy">OrderBy</a></code> | <code>*string</code> | Order results by field name and direction (e.g., name:asc). Ignored when search is provided; results are ranked by relevance instead. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.search">Search</a></code> | <code>*string</code> | Fuzzy search across application name and hostnames. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/zero_trust_resource_library_applications#account_id DataCloudflareZeroTrustResourceLibraryApplications#account_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

Filter applications using key:value format.

Supported filter keys:

* name: Filter by application name (e.g., name:HR)
* id: Filter by application ID (e.g., id:0b63249c-95bf-4cc0-a7cc-d7faaaf1dac0)
* human_id: Filter by human-readable ID (e.g., human_id:HR)
* hostname: Filter by hostname or support domain (e.g., hostname:portal.example.com)
* source: Filter by application source name (e.g., source:cloudflare)
* ip_subnet: Filter by IP subnet using CIDR containment — returns applications where any stored subnet contains the search value (e.g., ip_subnet:10.0.1.5/32 matches apps with 10.0.0.0/16)
* intel_id: Filter by Intel API ID (e.g., intel_id:498). also supports multiple values (e.g., intel_id:498,1001)
* category_id: Filter by category ID (e.g., category_id:37f8ec03-8766-49d4-9a15-369b044c842c).
* category_name: Filter by category name (e.g., category_name:HR).
* supported: Filter by supported Cloudflare product (e.g., supported:ACCESS). Values: GATEWAY, ACCESS, CASB.
  .

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/zero_trust_resource_library_applications#filter DataCloudflareZeroTrustResourceLibraryApplications#filter}

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.limit"></a>

```go
Limit *f64
```

- *Type:* *f64

Limit of number of results to return (max 250).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/zero_trust_resource_library_applications#limit DataCloudflareZeroTrustResourceLibraryApplications#limit}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.maxItems"></a>

```go
MaxItems *f64
```

- *Type:* *f64

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/zero_trust_resource_library_applications#max_items DataCloudflareZeroTrustResourceLibraryApplications#max_items}

---

##### `Offset`<sup>Optional</sup> <a name="Offset" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.offset"></a>

```go
Offset *f64
```

- *Type:* *f64

Offset of results to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/zero_trust_resource_library_applications#offset DataCloudflareZeroTrustResourceLibraryApplications#offset}

---

##### `OrderBy`<sup>Optional</sup> <a name="OrderBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.orderBy"></a>

```go
OrderBy *string
```

- *Type:* *string

Order results by field name and direction (e.g., name:asc). Ignored when search is provided; results are ranked by relevance instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/zero_trust_resource_library_applications#order_by DataCloudflareZeroTrustResourceLibraryApplications#order_by}

---

##### `Search`<sup>Optional</sup> <a name="Search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsConfig.property.search"></a>

```go
Search *string
```

- *Type:* *string

Fuzzy search across application name and hostnames.

Results are ranked by relevance. Must be between 2 and 200 characters. Can be combined with filter parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/zero_trust_resource_library_applications#search DataCloudflareZeroTrustResourceLibraryApplications#search}

---

### DataCloudflareZeroTrustResourceLibraryApplicationsResult <a name="DataCloudflareZeroTrustResourceLibraryApplicationsResult" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResult.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarezerotrustresourcelibraryapplications"

&datacloudflarezerotrustresourcelibraryapplications.DataCloudflareZeroTrustResourceLibraryApplicationsResult {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustResourceLibraryApplicationsResultList <a name="DataCloudflareZeroTrustResourceLibraryApplicationsResultList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarezerotrustresourcelibraryapplications"

datacloudflarezerotrustresourcelibraryapplications.NewDataCloudflareZeroTrustResourceLibraryApplicationsResultList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareZeroTrustResourceLibraryApplicationsResultList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.get"></a>

```go
func Get(index *f64) DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference <a name="DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarezerotrustresourcelibraryapplications"

datacloudflarezerotrustresourcelibraryapplications.NewDataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.applicationConfidenceScore">ApplicationConfidenceScore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.applicationScoreComposition">ApplicationScoreComposition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.applicationSource">ApplicationSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.applicationType">ApplicationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.applicationTypeDescription">ApplicationTypeDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.genAiScore">GenAiScore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.hostnames">Hostnames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.humanId">HumanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.intelId">IntelId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.ipSubnets">IpSubnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.portProtocols">PortProtocols</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.supportDomains">SupportDomains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.supported">Supported</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResult">DataCloudflareZeroTrustResourceLibraryApplicationsResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationConfidenceScore`<sup>Required</sup> <a name="ApplicationConfidenceScore" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.applicationConfidenceScore"></a>

```go
func ApplicationConfidenceScore() *f64
```

- *Type:* *f64

---

##### `ApplicationScoreComposition`<sup>Required</sup> <a name="ApplicationScoreComposition" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.applicationScoreComposition"></a>

```go
func ApplicationScoreComposition() *string
```

- *Type:* *string

---

##### `ApplicationSource`<sup>Required</sup> <a name="ApplicationSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.applicationSource"></a>

```go
func ApplicationSource() *string
```

- *Type:* *string

---

##### `ApplicationType`<sup>Required</sup> <a name="ApplicationType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.applicationType"></a>

```go
func ApplicationType() *string
```

- *Type:* *string

---

##### `ApplicationTypeDescription`<sup>Required</sup> <a name="ApplicationTypeDescription" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.applicationTypeDescription"></a>

```go
func ApplicationTypeDescription() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `GenAiScore`<sup>Required</sup> <a name="GenAiScore" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.genAiScore"></a>

```go
func GenAiScore() *f64
```

- *Type:* *f64

---

##### `Hostnames`<sup>Required</sup> <a name="Hostnames" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.hostnames"></a>

```go
func Hostnames() *[]*string
```

- *Type:* *[]*string

---

##### `HumanId`<sup>Required</sup> <a name="HumanId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.humanId"></a>

```go
func HumanId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IntelId`<sup>Required</sup> <a name="IntelId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.intelId"></a>

```go
func IntelId() *f64
```

- *Type:* *f64

---

##### `IpSubnets`<sup>Required</sup> <a name="IpSubnets" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.ipSubnets"></a>

```go
func IpSubnets() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PortProtocols`<sup>Required</sup> <a name="PortProtocols" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.portProtocols"></a>

```go
func PortProtocols() *[]*string
```

- *Type:* *[]*string

---

##### `SupportDomains`<sup>Required</sup> <a name="SupportDomains" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.supportDomains"></a>

```go
func SupportDomains() *[]*string
```

- *Type:* *[]*string

---

##### `Supported`<sup>Required</sup> <a name="Supported" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.supported"></a>

```go
func Supported() *[]*string
```

- *Type:* *[]*string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResultOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustResourceLibraryApplicationsResult
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryApplications.DataCloudflareZeroTrustResourceLibraryApplicationsResult">DataCloudflareZeroTrustResourceLibraryApplicationsResult</a>

---



