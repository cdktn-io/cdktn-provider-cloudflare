# `dataCloudflareMagicTransitSiteAcls` Submodule <a name="`dataCloudflareMagicTransitSiteAcls` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareMagicTransitSiteAcls <a name="DataCloudflareMagicTransitSiteAcls" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/magic_transit_site_acls cloudflare_magic_transit_site_acls}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflaremagictransitsiteacls"

datacloudflaremagictransitsiteacls.NewDataCloudflareMagicTransitSiteAcls(scope Construct, id *string, config DataCloudflareMagicTransitSiteAclsConfig) DataCloudflareMagicTransitSiteAcls
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig">DataCloudflareMagicTransitSiteAclsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig">DataCloudflareMagicTransitSiteAclsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.resetMaxItems">ResetMaxItems</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.resetMaxItems"></a>

```go
func ResetMaxItems()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareMagicTransitSiteAcls resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflaremagictransitsiteacls"

datacloudflaremagictransitsiteacls.DataCloudflareMagicTransitSiteAcls_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflaremagictransitsiteacls"

datacloudflaremagictransitsiteacls.DataCloudflareMagicTransitSiteAcls_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflaremagictransitsiteacls"

datacloudflaremagictransitsiteacls.DataCloudflareMagicTransitSiteAcls_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflaremagictransitsiteacls"

datacloudflaremagictransitsiteacls.DataCloudflareMagicTransitSiteAcls_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataCloudflareMagicTransitSiteAcls resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareMagicTransitSiteAcls to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareMagicTransitSiteAcls that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/magic_transit_site_acls#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareMagicTransitSiteAcls to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.result">Result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList">DataCloudflareMagicTransitSiteAclsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.maxItemsInput">MaxItemsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.siteIdInput">SiteIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.maxItems">MaxItems</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.siteId">SiteId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.result"></a>

```go
func Result() DataCloudflareMagicTransitSiteAclsResultList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList">DataCloudflareMagicTransitSiteAclsResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.maxItemsInput"></a>

```go
func MaxItemsInput() *f64
```

- *Type:* *f64

---

##### `SiteIdInput`<sup>Optional</sup> <a name="SiteIdInput" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.siteIdInput"></a>

```go
func SiteIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.maxItems"></a>

```go
func MaxItems() *f64
```

- *Type:* *f64

---

##### `SiteId`<sup>Required</sup> <a name="SiteId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.siteId"></a>

```go
func SiteId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAcls.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareMagicTransitSiteAclsConfig <a name="DataCloudflareMagicTransitSiteAclsConfig" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflaremagictransitsiteacls"

&datacloudflaremagictransitsiteacls.DataCloudflareMagicTransitSiteAclsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	SiteId: *string,
	MaxItems: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig.property.siteId">SiteId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig.property.maxItems">MaxItems</a></code> | <code>*f64</code> | Max items to fetch, default: 1000. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/magic_transit_site_acls#account_id DataCloudflareMagicTransitSiteAcls#account_id}

---

##### `SiteId`<sup>Required</sup> <a name="SiteId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig.property.siteId"></a>

```go
SiteId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/magic_transit_site_acls#site_id DataCloudflareMagicTransitSiteAcls#site_id}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsConfig.property.maxItems"></a>

```go
MaxItems *f64
```

- *Type:* *f64

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/data-sources/magic_transit_site_acls#max_items DataCloudflareMagicTransitSiteAcls#max_items}

---

### DataCloudflareMagicTransitSiteAclsResult <a name="DataCloudflareMagicTransitSiteAclsResult" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResult.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflaremagictransitsiteacls"

&datacloudflaremagictransitsiteacls.DataCloudflareMagicTransitSiteAclsResult {

}
```


### DataCloudflareMagicTransitSiteAclsResultLan1 <a name="DataCloudflareMagicTransitSiteAclsResultLan1" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflaremagictransitsiteacls"

&datacloudflaremagictransitsiteacls.DataCloudflareMagicTransitSiteAclsResultLan1 {

}
```


### DataCloudflareMagicTransitSiteAclsResultLan2 <a name="DataCloudflareMagicTransitSiteAclsResultLan2" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflaremagictransitsiteacls"

&datacloudflaremagictransitsiteacls.DataCloudflareMagicTransitSiteAclsResultLan2 {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareMagicTransitSiteAclsResultLan1OutputReference <a name="DataCloudflareMagicTransitSiteAclsResultLan1OutputReference" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflaremagictransitsiteacls"

datacloudflaremagictransitsiteacls.NewDataCloudflareMagicTransitSiteAclsResultLan1OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareMagicTransitSiteAclsResultLan1OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.property.lanId">LanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.property.lanName">LanName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.property.portRanges">PortRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.property.ports">Ports</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1">DataCloudflareMagicTransitSiteAclsResultLan1</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LanId`<sup>Required</sup> <a name="LanId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.property.lanId"></a>

```go
func LanId() *string
```

- *Type:* *string

---

##### `LanName`<sup>Required</sup> <a name="LanName" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.property.lanName"></a>

```go
func LanName() *string
```

- *Type:* *string

---

##### `PortRanges`<sup>Required</sup> <a name="PortRanges" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.property.portRanges"></a>

```go
func PortRanges() *[]*string
```

- *Type:* *[]*string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.property.ports"></a>

```go
func Ports() *[]*f64
```

- *Type:* *[]*f64

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareMagicTransitSiteAclsResultLan1
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1">DataCloudflareMagicTransitSiteAclsResultLan1</a>

---


### DataCloudflareMagicTransitSiteAclsResultLan2OutputReference <a name="DataCloudflareMagicTransitSiteAclsResultLan2OutputReference" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflaremagictransitsiteacls"

datacloudflaremagictransitsiteacls.NewDataCloudflareMagicTransitSiteAclsResultLan2OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareMagicTransitSiteAclsResultLan2OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.property.lanId">LanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.property.lanName">LanName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.property.portRanges">PortRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.property.ports">Ports</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2">DataCloudflareMagicTransitSiteAclsResultLan2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LanId`<sup>Required</sup> <a name="LanId" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.property.lanId"></a>

```go
func LanId() *string
```

- *Type:* *string

---

##### `LanName`<sup>Required</sup> <a name="LanName" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.property.lanName"></a>

```go
func LanName() *string
```

- *Type:* *string

---

##### `PortRanges`<sup>Required</sup> <a name="PortRanges" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.property.portRanges"></a>

```go
func PortRanges() *[]*string
```

- *Type:* *[]*string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.property.ports"></a>

```go
func Ports() *[]*f64
```

- *Type:* *[]*f64

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareMagicTransitSiteAclsResultLan2
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2">DataCloudflareMagicTransitSiteAclsResultLan2</a>

---


### DataCloudflareMagicTransitSiteAclsResultList <a name="DataCloudflareMagicTransitSiteAclsResultList" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflaremagictransitsiteacls"

datacloudflaremagictransitsiteacls.NewDataCloudflareMagicTransitSiteAclsResultList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataCloudflareMagicTransitSiteAclsResultList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.get"></a>

```go
func Get(index *f64) DataCloudflareMagicTransitSiteAclsResultOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataCloudflareMagicTransitSiteAclsResultOutputReference <a name="DataCloudflareMagicTransitSiteAclsResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/datacloudflaremagictransitsiteacls"

datacloudflaremagictransitsiteacls.NewDataCloudflareMagicTransitSiteAclsResultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataCloudflareMagicTransitSiteAclsResultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.property.forwardLocally">ForwardLocally</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.property.lan1">Lan1</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference">DataCloudflareMagicTransitSiteAclsResultLan1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.property.lan2">Lan2</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference">DataCloudflareMagicTransitSiteAclsResultLan2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.property.protocols">Protocols</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.property.unidirectional">Unidirectional</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResult">DataCloudflareMagicTransitSiteAclsResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ForwardLocally`<sup>Required</sup> <a name="ForwardLocally" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.property.forwardLocally"></a>

```go
func ForwardLocally() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Lan1`<sup>Required</sup> <a name="Lan1" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.property.lan1"></a>

```go
func Lan1() DataCloudflareMagicTransitSiteAclsResultLan1OutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan1OutputReference">DataCloudflareMagicTransitSiteAclsResultLan1OutputReference</a>

---

##### `Lan2`<sup>Required</sup> <a name="Lan2" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.property.lan2"></a>

```go
func Lan2() DataCloudflareMagicTransitSiteAclsResultLan2OutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultLan2OutputReference">DataCloudflareMagicTransitSiteAclsResultLan2OutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.property.protocols"></a>

```go
func Protocols() *[]*string
```

- *Type:* *[]*string

---

##### `Unidirectional`<sup>Required</sup> <a name="Unidirectional" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.property.unidirectional"></a>

```go
func Unidirectional() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResultOutputReference.property.internalValue"></a>

```go
func InternalValue() DataCloudflareMagicTransitSiteAclsResult
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicTransitSiteAcls.DataCloudflareMagicTransitSiteAclsResult">DataCloudflareMagicTransitSiteAclsResult</a>

---



