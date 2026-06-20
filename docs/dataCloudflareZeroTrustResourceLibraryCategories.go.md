# `dataCloudflareZeroTrustResourceLibraryCategories` Submodule <a name="`dataCloudflareZeroTrustResourceLibraryCategories` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustResourceLibraryCategories <a name="DataCloudflareZeroTrustResourceLibraryCategories" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_resource_library_categories cloudflare_zero_trust_resource_library_categories}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarezerotrustresourcelibrarycategories"

datacloudflarezerotrustresourcelibrarycategories.NewDataCloudflareZeroTrustResourceLibraryCategories(scope Construct, id *string, config DataCloudflareZeroTrustResourceLibraryCategoriesConfig) DataCloudflareZeroTrustResourceLibraryCategories
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesConfig">DataCloudflareZeroTrustResourceLibraryCategoriesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesConfig">DataCloudflareZeroTrustResourceLibraryCategoriesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.resetLimit">ResetLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.resetOffset">ResetOffset</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetLimit` <a name="ResetLimit" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.resetLimit"></a>

```go
func ResetLimit()
```

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.resetMaxItems"></a>

```go
func ResetMaxItems()
```

##### `ResetOffset` <a name="ResetOffset" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.resetOffset"></a>

```go
func ResetOffset()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustResourceLibraryCategories resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarezerotrustresourcelibrarycategories"

datacloudflarezerotrustresourcelibrarycategories.DataCloudflareZeroTrustResourceLibraryCategories_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarezerotrustresourcelibrarycategories"

datacloudflarezerotrustresourcelibrarycategories.DataCloudflareZeroTrustResourceLibraryCategories_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarezerotrustresourcelibrarycategories"

datacloudflarezerotrustresourcelibrarycategories.DataCloudflareZeroTrustResourceLibraryCategories_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarezerotrustresourcelibrarycategories"

datacloudflarezerotrustresourcelibrarycategories.DataCloudflareZeroTrustResourceLibraryCategories_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataCloudflareZeroTrustResourceLibraryCategories resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareZeroTrustResourceLibraryCategories to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareZeroTrustResourceLibraryCategories that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_resource_library_categories#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustResourceLibraryCategories to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.property.result">Result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultList">DataCloudflareZeroTrustResourceLibraryCategoriesResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.property.limitInput">LimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.property.maxItemsInput">MaxItemsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.property.offsetInput">OffsetInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.property.limit">Limit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.property.maxItems">MaxItems</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.property.offset">Offset</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.property.result"></a>

```go
func Result() DataCloudflareZeroTrustResourceLibraryCategoriesResultList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultList">DataCloudflareZeroTrustResourceLibraryCategoriesResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.property.limitInput"></a>

```go
func LimitInput() *f64
```

- *Type:* *f64

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.property.maxItemsInput"></a>

```go
func MaxItemsInput() *f64
```

- *Type:* *f64

---

##### `OffsetInput`<sup>Optional</sup> <a name="OffsetInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.property.offsetInput"></a>

```go
func OffsetInput() *f64
```

- *Type:* *f64

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.property.limit"></a>

```go
func Limit() *f64
```

- *Type:* *f64

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.property.maxItems"></a>

```go
func MaxItems() *f64
```

- *Type:* *f64

---

##### `Offset`<sup>Required</sup> <a name="Offset" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.property.offset"></a>

```go
func Offset() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategories.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustResourceLibraryCategoriesConfig <a name="DataCloudflareZeroTrustResourceLibraryCategoriesConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarezerotrustresourcelibrarycategories"

&datacloudflarezerotrustresourcelibrarycategories.DataCloudflareZeroTrustResourceLibraryCategoriesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Limit: *f64,
	MaxItems: *f64,
	Offset: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_resource_library_categories#account_id DataCloudflareZeroTrustResourceLibraryCategories#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesConfig.property.limit">Limit</a></code> | <code>*f64</code> | Limit of number of results to return. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesConfig.property.maxItems">MaxItems</a></code> | <code>*f64</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesConfig.property.offset">Offset</a></code> | <code>*f64</code> | Offset of results to return. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_resource_library_categories#account_id DataCloudflareZeroTrustResourceLibraryCategories#account_id}.

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesConfig.property.limit"></a>

```go
Limit *f64
```

- *Type:* *f64

Limit of number of results to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_resource_library_categories#limit DataCloudflareZeroTrustResourceLibraryCategories#limit}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesConfig.property.maxItems"></a>

```go
MaxItems *f64
```

- *Type:* *f64

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_resource_library_categories#max_items DataCloudflareZeroTrustResourceLibraryCategories#max_items}

---

##### `Offset`<sup>Optional</sup> <a name="Offset" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesConfig.property.offset"></a>

```go
Offset *f64
```

- *Type:* *f64

Offset of results to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/zero_trust_resource_library_categories#offset DataCloudflareZeroTrustResourceLibraryCategories#offset}

---

### DataCloudflareZeroTrustResourceLibraryCategoriesResult <a name="DataCloudflareZeroTrustResourceLibraryCategoriesResult" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResult.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarezerotrustresourcelibrarycategories"

&datacloudflarezerotrustresourcelibrarycategories.DataCloudflareZeroTrustResourceLibraryCategoriesResult {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustResourceLibraryCategoriesResultList <a name="DataCloudflareZeroTrustResourceLibraryCategoriesResultList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarezerotrustresourcelibrarycategories"

datacloudflarezerotrustresourcelibrarycategories.NewDataCloudflareZeroTrustResourceLibraryCategoriesResultList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareZeroTrustResourceLibraryCategoriesResultList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultList.get"></a>

```go
func Get(index *f64) DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference <a name="DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarezerotrustresourcelibrarycategories"

datacloudflarezerotrustresourcelibrarycategories.NewDataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResult">DataCloudflareZeroTrustResourceLibraryCategoriesResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResultOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareZeroTrustResourceLibraryCategoriesResult
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustResourceLibraryCategories.DataCloudflareZeroTrustResourceLibraryCategoriesResult">DataCloudflareZeroTrustResourceLibraryCategoriesResult</a>

---



