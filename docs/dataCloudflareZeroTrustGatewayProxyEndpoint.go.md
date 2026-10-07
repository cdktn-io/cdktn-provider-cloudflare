# `dataCloudflareZeroTrustGatewayProxyEndpoint` Submodule <a name="`dataCloudflareZeroTrustGatewayProxyEndpoint` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustGatewayProxyEndpoint <a name="DataCloudflareZeroTrustGatewayProxyEndpoint" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_gateway_proxy_endpoint cloudflare_zero_trust_gateway_proxy_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflarezerotrustgatewayproxyendpoint"

datacloudflarezerotrustgatewayproxyendpoint.NewDataCloudflareZeroTrustGatewayProxyEndpoint(scope Construct, id *string, config DataCloudflareZeroTrustGatewayProxyEndpointConfig) DataCloudflareZeroTrustGatewayProxyEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointConfig">DataCloudflareZeroTrustGatewayProxyEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointConfig">DataCloudflareZeroTrustGatewayProxyEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.resetProxyEndpointId">ResetProxyEndpointId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.putFilter"></a>

```go
func PutFilter(value DataCloudflareZeroTrustGatewayProxyEndpointFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilter">DataCloudflareZeroTrustGatewayProxyEndpointFilter</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetProxyEndpointId` <a name="ResetProxyEndpointId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.resetProxyEndpointId"></a>

```go
func ResetProxyEndpointId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustGatewayProxyEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflarezerotrustgatewayproxyendpoint"

datacloudflarezerotrustgatewayproxyendpoint.DataCloudflareZeroTrustGatewayProxyEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflarezerotrustgatewayproxyendpoint"

datacloudflarezerotrustgatewayproxyendpoint.DataCloudflareZeroTrustGatewayProxyEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflarezerotrustgatewayproxyendpoint"

datacloudflarezerotrustgatewayproxyendpoint.DataCloudflareZeroTrustGatewayProxyEndpoint_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflarezerotrustgatewayproxyendpoint"

datacloudflarezerotrustgatewayproxyendpoint.DataCloudflareZeroTrustGatewayProxyEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataCloudflareZeroTrustGatewayProxyEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataCloudflareZeroTrustGatewayProxyEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataCloudflareZeroTrustGatewayProxyEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_gateway_proxy_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustGatewayProxyEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference">DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.ips">Ips</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.subdomain">Subdomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.proxyEndpointIdInput">ProxyEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.proxyEndpointId">ProxyEndpointId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.filter"></a>

```go
func Filter() DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference">DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Ips`<sup>Required</sup> <a name="Ips" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.ips"></a>

```go
func Ips() *[]*string
```

- *Type:* *[]*string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Subdomain`<sup>Required</sup> <a name="Subdomain" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.subdomain"></a>

```go
func Subdomain() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `ProxyEndpointIdInput`<sup>Optional</sup> <a name="ProxyEndpointIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.proxyEndpointIdInput"></a>

```go
func ProxyEndpointIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `ProxyEndpointId`<sup>Required</sup> <a name="ProxyEndpointId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.proxyEndpointId"></a>

```go
func ProxyEndpointId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustGatewayProxyEndpointConfig <a name="DataCloudflareZeroTrustGatewayProxyEndpointConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflarezerotrustgatewayproxyendpoint"

&datacloudflarezerotrustgatewayproxyendpoint.DataCloudflareZeroTrustGatewayProxyEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Filter: github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilter,
	ProxyEndpointId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Specify the Cloudflare account identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointConfig.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilter">DataCloudflareZeroTrustGatewayProxyEndpointFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_gateway_proxy_endpoint#filter DataCloudflareZeroTrustGatewayProxyEndpoint#filter}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointConfig.property.proxyEndpointId">ProxyEndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_gateway_proxy_endpoint#proxy_endpoint_id DataCloudflareZeroTrustGatewayProxyEndpoint#proxy_endpoint_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Specify the Cloudflare account identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_gateway_proxy_endpoint#account_id DataCloudflareZeroTrustGatewayProxyEndpoint#account_id}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointConfig.property.filter"></a>

```go
Filter DataCloudflareZeroTrustGatewayProxyEndpointFilter
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilter">DataCloudflareZeroTrustGatewayProxyEndpointFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_gateway_proxy_endpoint#filter DataCloudflareZeroTrustGatewayProxyEndpoint#filter}.

---

##### `ProxyEndpointId`<sup>Optional</sup> <a name="ProxyEndpointId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointConfig.property.proxyEndpointId"></a>

```go
ProxyEndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_gateway_proxy_endpoint#proxy_endpoint_id DataCloudflareZeroTrustGatewayProxyEndpoint#proxy_endpoint_id}.

---

### DataCloudflareZeroTrustGatewayProxyEndpointFilter <a name="DataCloudflareZeroTrustGatewayProxyEndpointFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflarezerotrustgatewayproxyendpoint"

&datacloudflarezerotrustgatewayproxyendpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilter {
	Direction: *string,
	Filter: *[]*string,
	OrderBy: *string,
	Search: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilter.property.direction">Direction</a></code> | <code>*string</code> | Sort direction. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilter.property.filter">Filter</a></code> | <code>*[]*string</code> | Filter the returned proxy endpoints by one or more `field:value` pairs. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilter.property.orderBy">OrderBy</a></code> | <code>*string</code> | Field to sort the returned endpoints by. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilter.property.search">Search</a></code> | <code>*string</code> | Case-insensitive substring match on the endpoint name. When combined with `filter`, both must match (logical AND). |

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilter.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

Sort direction.

Only takes effect when `order_by` is also provided; it
is ignored otherwise. When `direction` is omitted the effective
direction is field-specific: `created_at` and `updated_at` default to
descending (newest first); `name` defaults to ascending.

* `asc` — ascending.
* `desc` — descending.
  Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_gateway_proxy_endpoint#direction DataCloudflareZeroTrustGatewayProxyEndpoint#direction}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilter.property.filter"></a>

```go
Filter *[]*string
```

- *Type:* *[]*string

Filter the returned proxy endpoints by one or more `field:value` pairs.

Repeat the parameter to apply multiple filters; they are combined with
logical AND (an endpoint must satisfy every filter to be returned).

Supported fields and their matching behaviour:

* `name` — case-insensitive substring match on the endpoint name.
* `id` — substring match on the endpoint ID (UUID), with or without dashes.
* `kind` — exact match on the endpoint kind. The value must be `ip` or `identity`; any other value returns `400`.

Each entry must match one of the per-field patterns below: the field
must be one of `name`, `id`, or `kind`; `name`/`id` accept any value,
while `kind` only accepts `ip` or `identity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_gateway_proxy_endpoint#filter DataCloudflareZeroTrustGatewayProxyEndpoint#filter}

---

##### `OrderBy`<sup>Optional</sup> <a name="OrderBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilter.property.orderBy"></a>

```go
OrderBy *string
```

- *Type:* *string

Field to sort the returned endpoints by.

When omitted, the order of
results is unspecified. Supported values:

* `name` — sort alphabetically by endpoint name.
* `created_at` — sort by creation time; defaults to descending unless `direction` is set.
* `updated_at` — sort by last-modified time; defaults to descending unless `direction` is set.
  Available values: "name", "created_at", "updated_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_gateway_proxy_endpoint#order_by DataCloudflareZeroTrustGatewayProxyEndpoint#order_by}

---

##### `Search`<sup>Optional</sup> <a name="Search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilter.property.search"></a>

```go
Search *string
```

- *Type:* *string

Case-insensitive substring match on the endpoint name. When combined with `filter`, both must match (logical AND).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_gateway_proxy_endpoint#search DataCloudflareZeroTrustGatewayProxyEndpoint#search}

---

## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference <a name="DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v16/datacloudflarezerotrustgatewayproxyendpoint"

datacloudflarezerotrustgatewayproxyendpoint.NewDataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.resetOrderBy">ResetOrderBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.resetSearch">ResetSearch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDirection` <a name="ResetDirection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.resetDirection"></a>

```go
func ResetDirection()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetOrderBy` <a name="ResetOrderBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.resetOrderBy"></a>

```go
func ResetOrderBy()
```

##### `ResetSearch` <a name="ResetSearch" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.resetSearch"></a>

```go
func ResetSearch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.property.filterInput">FilterInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.property.orderByInput">OrderByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.property.searchInput">SearchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.property.filter">Filter</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.property.orderBy">OrderBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.property.search">Search</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.property.filterInput"></a>

```go
func FilterInput() *[]*string
```

- *Type:* *[]*string

---

##### `OrderByInput`<sup>Optional</sup> <a name="OrderByInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.property.orderByInput"></a>

```go
func OrderByInput() *string
```

- *Type:* *string

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.property.searchInput"></a>

```go
func SearchInput() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.property.filter"></a>

```go
func Filter() *[]*string
```

- *Type:* *[]*string

---

##### `OrderBy`<sup>Required</sup> <a name="OrderBy" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.property.orderBy"></a>

```go
func OrderBy() *string
```

- *Type:* *string

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.property.search"></a>

```go
func Search() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustGatewayProxyEndpoint.DataCloudflareZeroTrustGatewayProxyEndpointFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



