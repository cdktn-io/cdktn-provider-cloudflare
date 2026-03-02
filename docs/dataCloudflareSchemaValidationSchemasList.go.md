# `dataCloudflareSchemaValidationSchemasList` Submodule <a name="`dataCloudflareSchemaValidationSchemasList` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareSchemaValidationSchemasList <a name="DataCloudflareSchemaValidationSchemasList" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/schema_validation_schemas_list cloudflare_schema_validation_schemas_list}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareschemavalidationschemaslist"

datacloudflareschemavalidationschemaslist.NewDataCloudflareSchemaValidationSchemasList(scope Construct, id *string, config DataCloudflareSchemaValidationSchemasListConfig) DataCloudflareSchemaValidationSchemasList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig">DataCloudflareSchemaValidationSchemasListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig">DataCloudflareSchemaValidationSchemasListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.resetMaxItems">ResetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.resetOmitSource">ResetOmitSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.resetValidationEnabled">ResetValidationEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.resetMaxItems"></a>

```go
func ResetMaxItems()
```

##### `ResetOmitSource` <a name="ResetOmitSource" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.resetOmitSource"></a>

```go
func ResetOmitSource()
```

##### `ResetValidationEnabled` <a name="ResetValidationEnabled" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.resetValidationEnabled"></a>

```go
func ResetValidationEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareSchemaValidationSchemasList resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareschemavalidationschemaslist"

datacloudflareschemavalidationschemaslist.DataCloudflareSchemaValidationSchemasList_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareschemavalidationschemaslist"

datacloudflareschemavalidationschemaslist.DataCloudflareSchemaValidationSchemasList_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareschemavalidationschemaslist"

datacloudflareschemavalidationschemaslist.DataCloudflareSchemaValidationSchemasList_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareschemavalidationschemaslist"

datacloudflareschemavalidationschemaslist.DataCloudflareSchemaValidationSchemasList_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataCloudflareSchemaValidationSchemasList resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareSchemaValidationSchemasList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareSchemaValidationSchemasList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/schema_validation_schemas_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareSchemaValidationSchemasList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.result">Result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList">DataCloudflareSchemaValidationSchemasListResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.maxItemsInput">MaxItemsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.omitSourceInput">OmitSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.validationEnabledInput">ValidationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.maxItems">MaxItems</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.omitSource">OmitSource</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.validationEnabled">ValidationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.result"></a>

```go
func Result() DataCloudflareSchemaValidationSchemasListResultList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList">DataCloudflareSchemaValidationSchemasListResultList</a>

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.maxItemsInput"></a>

```go
func MaxItemsInput() *f64
```

- *Type:* *f64

---

##### `OmitSourceInput`<sup>Optional</sup> <a name="OmitSourceInput" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.omitSourceInput"></a>

```go
func OmitSourceInput() interface{}
```

- *Type:* interface{}

---

##### `ValidationEnabledInput`<sup>Optional</sup> <a name="ValidationEnabledInput" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.validationEnabledInput"></a>

```go
func ValidationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.maxItems"></a>

```go
func MaxItems() *f64
```

- *Type:* *f64

---

##### `OmitSource`<sup>Required</sup> <a name="OmitSource" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.omitSource"></a>

```go
func OmitSource() interface{}
```

- *Type:* interface{}

---

##### `ValidationEnabled`<sup>Required</sup> <a name="ValidationEnabled" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.validationEnabled"></a>

```go
func ValidationEnabled() interface{}
```

- *Type:* interface{}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasList.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareSchemaValidationSchemasListConfig <a name="DataCloudflareSchemaValidationSchemasListConfig" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareschemavalidationschemaslist"

&datacloudflareschemavalidationschemaslist.DataCloudflareSchemaValidationSchemasListConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ZoneId: *string,
	MaxItems: *f64,
	OmitSource: interface{},
	ValidationEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.maxItems">MaxItems</a></code> | <code>*f64</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.omitSource">OmitSource</a></code> | <code>interface{}</code> | Omit the source-files of schemas and only retrieve their meta-data. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.validationEnabled">ValidationEnabled</a></code> | <code>interface{}</code> | Filter for enabled schemas. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/schema_validation_schemas_list#zone_id DataCloudflareSchemaValidationSchemasList#zone_id}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.maxItems"></a>

```go
MaxItems *f64
```

- *Type:* *f64

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/schema_validation_schemas_list#max_items DataCloudflareSchemaValidationSchemasList#max_items}

---

##### `OmitSource`<sup>Optional</sup> <a name="OmitSource" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.omitSource"></a>

```go
OmitSource interface{}
```

- *Type:* interface{}

Omit the source-files of schemas and only retrieve their meta-data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/schema_validation_schemas_list#omit_source DataCloudflareSchemaValidationSchemasList#omit_source}

---

##### `ValidationEnabled`<sup>Optional</sup> <a name="ValidationEnabled" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListConfig.property.validationEnabled"></a>

```go
ValidationEnabled interface{}
```

- *Type:* interface{}

Filter for enabled schemas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/schema_validation_schemas_list#validation_enabled DataCloudflareSchemaValidationSchemasList#validation_enabled}

---

### DataCloudflareSchemaValidationSchemasListResult <a name="DataCloudflareSchemaValidationSchemasListResult" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResult.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareschemavalidationschemaslist"

&datacloudflareschemavalidationschemaslist.DataCloudflareSchemaValidationSchemasListResult {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareSchemaValidationSchemasListResultList <a name="DataCloudflareSchemaValidationSchemasListResultList" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareschemavalidationschemaslist"

datacloudflareschemavalidationschemaslist.NewDataCloudflareSchemaValidationSchemasListResultList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareSchemaValidationSchemasListResultList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.get"></a>

```go
func Get(index *f64) DataCloudflareSchemaValidationSchemasListResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareSchemaValidationSchemasListResultOutputReference <a name="DataCloudflareSchemaValidationSchemasListResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflareschemavalidationschemaslist"

datacloudflareschemavalidationschemaslist.NewDataCloudflareSchemaValidationSchemasListResultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareSchemaValidationSchemasListResultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.schemaId">SchemaId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.validationEnabled">ValidationEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResult">DataCloudflareSchemaValidationSchemasListResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SchemaId`<sup>Required</sup> <a name="SchemaId" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.schemaId"></a>

```go
func SchemaId() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `ValidationEnabled`<sup>Required</sup> <a name="ValidationEnabled" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.validationEnabled"></a>

```go
func ValidationEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResultOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareSchemaValidationSchemasListResult
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareSchemaValidationSchemasList.DataCloudflareSchemaValidationSchemasListResult">DataCloudflareSchemaValidationSchemasListResult</a>

---



