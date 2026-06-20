# `dataCloudflareCertificateAuthoritiesHostnameAssociations` Submodule <a name="`dataCloudflareCertificateAuthoritiesHostnameAssociations` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareCertificateAuthoritiesHostnameAssociations <a name="DataCloudflareCertificateAuthoritiesHostnameAssociations" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/certificate_authorities_hostname_associations cloudflare_certificate_authorities_hostname_associations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarecertificateauthoritieshostnameassociations"

datacloudflarecertificateauthoritieshostnameassociations.NewDataCloudflareCertificateAuthoritiesHostnameAssociations(scope Construct, id *string, config DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig) DataCloudflareCertificateAuthoritiesHostnameAssociations
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig">DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig">DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.resetMtlsCertificateId">ResetMtlsCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetMtlsCertificateId` <a name="ResetMtlsCertificateId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.resetMtlsCertificateId"></a>

```go
func ResetMtlsCertificateId()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.resetZoneId"></a>

```go
func ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareCertificateAuthoritiesHostnameAssociations resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarecertificateauthoritieshostnameassociations"

datacloudflarecertificateauthoritieshostnameassociations.DataCloudflareCertificateAuthoritiesHostnameAssociations_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarecertificateauthoritieshostnameassociations"

datacloudflarecertificateauthoritieshostnameassociations.DataCloudflareCertificateAuthoritiesHostnameAssociations_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarecertificateauthoritieshostnameassociations"

datacloudflarecertificateauthoritieshostnameassociations.DataCloudflareCertificateAuthoritiesHostnameAssociations_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarecertificateauthoritieshostnameassociations"

datacloudflarecertificateauthoritieshostnameassociations.DataCloudflareCertificateAuthoritiesHostnameAssociations_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataCloudflareCertificateAuthoritiesHostnameAssociations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareCertificateAuthoritiesHostnameAssociations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareCertificateAuthoritiesHostnameAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/certificate_authorities_hostname_associations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareCertificateAuthoritiesHostnameAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.hostnames">Hostnames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.mtlsCertificateIdInput">MtlsCertificateIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.mtlsCertificateId">MtlsCertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Hostnames`<sup>Required</sup> <a name="Hostnames" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.hostnames"></a>

```go
func Hostnames() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MtlsCertificateIdInput`<sup>Optional</sup> <a name="MtlsCertificateIdInput" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.mtlsCertificateIdInput"></a>

```go
func MtlsCertificateIdInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `MtlsCertificateId`<sup>Required</sup> <a name="MtlsCertificateId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.mtlsCertificateId"></a>

```go
func MtlsCertificateId() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig <a name="DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v15/datacloudflarecertificateauthoritieshostnameassociations"

&datacloudflarecertificateauthoritieshostnameassociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	MtlsCertificateId: *string,
	ZoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.mtlsCertificateId">MtlsCertificateId</a></code> | <code>*string</code> | The UUID to match against for a certificate that was uploaded to the mTLS Certificate Management endpoint. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | Identifier. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MtlsCertificateId`<sup>Optional</sup> <a name="MtlsCertificateId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.mtlsCertificateId"></a>

```go
MtlsCertificateId *string
```

- *Type:* *string

The UUID to match against for a certificate that was uploaded to the mTLS Certificate Management endpoint.

If no mtls_certificate_id is given, the results will be the hostnames associated to your active Cloudflare Managed CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/certificate_authorities_hostname_associations#mtls_certificate_id DataCloudflareCertificateAuthoritiesHostnameAssociations#mtls_certificate_id}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/certificate_authorities_hostname_associations#zone_id DataCloudflareCertificateAuthoritiesHostnameAssociations#zone_id}

---



