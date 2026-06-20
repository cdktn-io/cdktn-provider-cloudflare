# `dataCloudflareMagicTransitCf1Site` Submodule <a name="`dataCloudflareMagicTransitCf1Site` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareMagicTransitCf1Site <a name="DataCloudflareMagicTransitCf1Site" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/magic_transit_cf1_site cloudflare_magic_transit_cf1_site}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflaremagictransitcf1site"

datacloudflaremagictransitcf1site.NewDataCloudflareMagicTransitCf1Site(scope Construct, id *string, config DataCloudflareMagicTransitCf1SiteConfig) DataCloudflareMagicTransitCf1Site
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig">DataCloudflareMagicTransitCf1SiteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig">DataCloudflareMagicTransitCf1SiteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareMagicTransitCf1Site resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflaremagictransitcf1site"

datacloudflaremagictransitcf1site.DataCloudflareMagicTransitCf1Site_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflaremagictransitcf1site"

datacloudflaremagictransitcf1site.DataCloudflareMagicTransitCf1Site_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflaremagictransitcf1site"

datacloudflaremagictransitcf1site.DataCloudflareMagicTransitCf1Site_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflaremagictransitcf1site"

datacloudflaremagictransitcf1site.DataCloudflareMagicTransitCf1Site_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataCloudflareMagicTransitCf1Site resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareMagicTransitCf1Site to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareMagicTransitCf1Site that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/magic_transit_cf1_site#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareMagicTransitCf1Site to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.location">Location</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference">DataCloudflareMagicTransitCf1SiteLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.modifiedOn">ModifiedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.cf1SiteIdInput">Cf1SiteIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.cf1SiteId">Cf1SiteId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.location"></a>

```go
func Location() DataCloudflareMagicTransitCf1SiteLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference">DataCloudflareMagicTransitCf1SiteLocationOutputReference</a>

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.modifiedOn"></a>

```go
func ModifiedOn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `Cf1SiteIdInput`<sup>Optional</sup> <a name="Cf1SiteIdInput" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.cf1SiteIdInput"></a>

```go
func Cf1SiteIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Cf1SiteId`<sup>Required</sup> <a name="Cf1SiteId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.cf1SiteId"></a>

```go
func Cf1SiteId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1Site.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareMagicTransitCf1SiteConfig <a name="DataCloudflareMagicTransitCf1SiteConfig" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflaremagictransitcf1site"

&datacloudflaremagictransitcf1site.DataCloudflareMagicTransitCf1SiteConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Cf1SiteId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.cf1SiteId">Cf1SiteId</a></code> | <code>*string</code> | Identifier. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/magic_transit_cf1_site#account_id DataCloudflareMagicTransitCf1Site#account_id}

---

##### `Cf1SiteId`<sup>Required</sup> <a name="Cf1SiteId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteConfig.property.cf1SiteId"></a>

```go
Cf1SiteId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/magic_transit_cf1_site#cf1_site_id DataCloudflareMagicTransitCf1Site#cf1_site_id}

---

### DataCloudflareMagicTransitCf1SiteLocation <a name="DataCloudflareMagicTransitCf1SiteLocation" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflaremagictransitcf1site"

&datacloudflaremagictransitcf1site.DataCloudflareMagicTransitCf1SiteLocation {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareMagicTransitCf1SiteLocationOutputReference <a name="DataCloudflareMagicTransitCf1SiteLocationOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflaremagictransitcf1site"

datacloudflaremagictransitcf1site.NewDataCloudflareMagicTransitCf1SiteLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareMagicTransitCf1SiteLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.property.lat">Lat</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.property.long">Long</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocation">DataCloudflareMagicTransitCf1SiteLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Lat`<sup>Required</sup> <a name="Lat" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.property.lat"></a>

```go
func Lat() *f64
```

- *Type:* *f64

---

##### `Long`<sup>Required</sup> <a name="Long" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.property.long"></a>

```go
func Long() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareMagicTransitCf1SiteLocation
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitCf1Site.DataCloudflareMagicTransitCf1SiteLocation">DataCloudflareMagicTransitCf1SiteLocation</a>

---



