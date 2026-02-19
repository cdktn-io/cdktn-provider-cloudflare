# `authenticatedOriginPullsHostnameCertificate` Submodule <a name="`authenticatedOriginPullsHostnameCertificate` Submodule" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthenticatedOriginPullsHostnameCertificate <a name="AuthenticatedOriginPullsHostnameCertificate" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/authenticated_origin_pulls_hostname_certificate cloudflare_authenticated_origin_pulls_hostname_certificate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/authenticatedoriginpullshostnamecertificate"

authenticatedoriginpullshostnamecertificate.NewAuthenticatedOriginPullsHostnameCertificate(scope Construct, id *string, config AuthenticatedOriginPullsHostnameCertificateConfig) AuthenticatedOriginPullsHostnameCertificate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig">AuthenticatedOriginPullsHostnameCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig">AuthenticatedOriginPullsHostnameCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AuthenticatedOriginPullsHostnameCertificate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/authenticatedoriginpullshostnamecertificate"

authenticatedoriginpullshostnamecertificate.AuthenticatedOriginPullsHostnameCertificate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/authenticatedoriginpullshostnamecertificate"

authenticatedoriginpullshostnamecertificate.AuthenticatedOriginPullsHostnameCertificate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/authenticatedoriginpullshostnamecertificate"

authenticatedoriginpullshostnamecertificate.AuthenticatedOriginPullsHostnameCertificate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/authenticatedoriginpullshostnamecertificate"

authenticatedoriginpullshostnamecertificate.AuthenticatedOriginPullsHostnameCertificate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AuthenticatedOriginPullsHostnameCertificate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AuthenticatedOriginPullsHostnameCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AuthenticatedOriginPullsHostnameCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/authenticated_origin_pulls_hostname_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AuthenticatedOriginPullsHostnameCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.expiresOn">ExpiresOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.serialNumber">SerialNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.signature">Signature</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.uploadedOn">UploadedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.certificateInput">CertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.privateKeyInput">PrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExpiresOn`<sup>Required</sup> <a name="ExpiresOn" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.expiresOn"></a>

```go
func ExpiresOn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.serialNumber"></a>

```go
func SerialNumber() *string
```

- *Type:* *string

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.signature"></a>

```go
func Signature() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UploadedOn`<sup>Required</sup> <a name="UploadedOn" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.uploadedOn"></a>

```go
func UploadedOn() *string
```

- *Type:* *string

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.certificateInput"></a>

```go
func CertificateInput() *string
```

- *Type:* *string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.privateKeyInput"></a>

```go
func PrivateKeyInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AuthenticatedOriginPullsHostnameCertificateConfig <a name="AuthenticatedOriginPullsHostnameCertificateConfig" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/authenticatedoriginpullshostnamecertificate"

&authenticatedoriginpullshostnamecertificate.AuthenticatedOriginPullsHostnameCertificateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Certificate: *string,
	PrivateKey: *string,
	ZoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.certificate">Certificate</a></code> | <code>*string</code> | The hostname certificate. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.privateKey">PrivateKey</a></code> | <code>*string</code> | The hostname certificate's private key. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | Identifier. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.certificate"></a>

```go
Certificate *string
```

- *Type:* *string

The hostname certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/authenticated_origin_pulls_hostname_certificate#certificate AuthenticatedOriginPullsHostnameCertificate#certificate}

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.privateKey"></a>

```go
PrivateKey *string
```

- *Type:* *string

The hostname certificate's private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/authenticated_origin_pulls_hostname_certificate#private_key AuthenticatedOriginPullsHostnameCertificate#private_key}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsHostnameCertificate.AuthenticatedOriginPullsHostnameCertificateConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/authenticated_origin_pulls_hostname_certificate#zone_id AuthenticatedOriginPullsHostnameCertificate#zone_id}

---



