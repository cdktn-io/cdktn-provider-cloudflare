# `dataCloudflareCustomOriginTrustStore` Submodule <a name="`dataCloudflareCustomOriginTrustStore` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareCustomOriginTrustStore <a name="DataCloudflareCustomOriginTrustStore" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/custom_origin_trust_store cloudflare_custom_origin_trust_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarecustomorigintruststore"

datacloudflarecustomorigintruststore.NewDataCloudflareCustomOriginTrustStore(scope Construct, id *string, config DataCloudflareCustomOriginTrustStoreConfig) DataCloudflareCustomOriginTrustStore
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig">DataCloudflareCustomOriginTrustStoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig">DataCloudflareCustomOriginTrustStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.resetCustomOriginTrustStoreId">ResetCustomOriginTrustStoreId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.resetFilter">ResetFilter</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.putFilter"></a>

```go
func PutFilter(value DataCloudflareCustomOriginTrustStoreFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilter">DataCloudflareCustomOriginTrustStoreFilter</a>

---

##### `ResetCustomOriginTrustStoreId` <a name="ResetCustomOriginTrustStoreId" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.resetCustomOriginTrustStoreId"></a>

```go
func ResetCustomOriginTrustStoreId()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.resetFilter"></a>

```go
func ResetFilter()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareCustomOriginTrustStore resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarecustomorigintruststore"

datacloudflarecustomorigintruststore.DataCloudflareCustomOriginTrustStore_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarecustomorigintruststore"

datacloudflarecustomorigintruststore.DataCloudflareCustomOriginTrustStore_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarecustomorigintruststore"

datacloudflarecustomorigintruststore.DataCloudflareCustomOriginTrustStore_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarecustomorigintruststore"

datacloudflarecustomorigintruststore.DataCloudflareCustomOriginTrustStore_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataCloudflareCustomOriginTrustStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareCustomOriginTrustStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareCustomOriginTrustStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/custom_origin_trust_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareCustomOriginTrustStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.expiresOn">ExpiresOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference">DataCloudflareCustomOriginTrustStoreFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.signature">Signature</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.uploadedOn">UploadedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.customOriginTrustStoreIdInput">CustomOriginTrustStoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.customOriginTrustStoreId">CustomOriginTrustStoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `ExpiresOn`<sup>Required</sup> <a name="ExpiresOn" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.expiresOn"></a>

```go
func ExpiresOn() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.filter"></a>

```go
func Filter() DataCloudflareCustomOriginTrustStoreFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference">DataCloudflareCustomOriginTrustStoreFilterOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.signature"></a>

```go
func Signature() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `UploadedOn`<sup>Required</sup> <a name="UploadedOn" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.uploadedOn"></a>

```go
func UploadedOn() *string
```

- *Type:* *string

---

##### `CustomOriginTrustStoreIdInput`<sup>Optional</sup> <a name="CustomOriginTrustStoreIdInput" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.customOriginTrustStoreIdInput"></a>

```go
func CustomOriginTrustStoreIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `CustomOriginTrustStoreId`<sup>Required</sup> <a name="CustomOriginTrustStoreId" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.customOriginTrustStoreId"></a>

```go
func CustomOriginTrustStoreId() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStore.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareCustomOriginTrustStoreConfig <a name="DataCloudflareCustomOriginTrustStoreConfig" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarecustomorigintruststore"

&datacloudflarecustomorigintruststore.DataCloudflareCustomOriginTrustStoreConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ZoneId: *string,
	CustomOriginTrustStoreId: *string,
	Filter: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilter,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.customOriginTrustStoreId">CustomOriginTrustStoreId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilter">DataCloudflareCustomOriginTrustStoreFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/custom_origin_trust_store#filter DataCloudflareCustomOriginTrustStore#filter}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/custom_origin_trust_store#zone_id DataCloudflareCustomOriginTrustStore#zone_id}

---

##### `CustomOriginTrustStoreId`<sup>Optional</sup> <a name="CustomOriginTrustStoreId" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.customOriginTrustStoreId"></a>

```go
CustomOriginTrustStoreId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/custom_origin_trust_store#custom_origin_trust_store_id DataCloudflareCustomOriginTrustStore#custom_origin_trust_store_id}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreConfig.property.filter"></a>

```go
Filter DataCloudflareCustomOriginTrustStoreFilter
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilter">DataCloudflareCustomOriginTrustStoreFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/custom_origin_trust_store#filter DataCloudflareCustomOriginTrustStore#filter}.

---

### DataCloudflareCustomOriginTrustStoreFilter <a name="DataCloudflareCustomOriginTrustStoreFilter" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarecustomorigintruststore"

&datacloudflarecustomorigintruststore.DataCloudflareCustomOriginTrustStoreFilter {
	Limit: *f64,
	Offset: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilter.property.limit">Limit</a></code> | <code>*f64</code> | Limit to the number of records returned. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilter.property.offset">Offset</a></code> | <code>*f64</code> | Offset the results. |

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilter.property.limit"></a>

```go
Limit *f64
```

- *Type:* *f64

Limit to the number of records returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/custom_origin_trust_store#limit DataCloudflareCustomOriginTrustStore#limit}

---

##### `Offset`<sup>Optional</sup> <a name="Offset" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilter.property.offset"></a>

```go
Offset *f64
```

- *Type:* *f64

Offset the results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/custom_origin_trust_store#offset DataCloudflareCustomOriginTrustStore#offset}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareCustomOriginTrustStoreFilterOutputReference <a name="DataCloudflareCustomOriginTrustStoreFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflarecustomorigintruststore"

datacloudflarecustomorigintruststore.NewDataCloudflareCustomOriginTrustStoreFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareCustomOriginTrustStoreFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.resetLimit">ResetLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.resetOffset">ResetOffset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLimit` <a name="ResetLimit" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.resetLimit"></a>

```go
func ResetLimit()
```

##### `ResetOffset` <a name="ResetOffset" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.resetOffset"></a>

```go
func ResetOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.property.limitInput">LimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.property.offsetInput">OffsetInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.property.limit">Limit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.property.offset">Offset</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.property.limitInput"></a>

```go
func LimitInput() *f64
```

- *Type:* *f64

---

##### `OffsetInput`<sup>Optional</sup> <a name="OffsetInput" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.property.offsetInput"></a>

```go
func OffsetInput() *f64
```

- *Type:* *f64

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.property.limit"></a>

```go
func Limit() *f64
```

- *Type:* *f64

---

##### `Offset`<sup>Required</sup> <a name="Offset" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.property.offset"></a>

```go
func Offset() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareCustomOriginTrustStore.DataCloudflareCustomOriginTrustStoreFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



