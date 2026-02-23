# `authenticatedOriginPullsCertificate` Submodule <a name="`authenticatedOriginPullsCertificate` Submodule" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthenticatedOriginPullsCertificate <a name="AuthenticatedOriginPullsCertificate" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/authenticated_origin_pulls_certificate cloudflare_authenticated_origin_pulls_certificate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/authenticatedoriginpullscertificate"

authenticatedoriginpullscertificate.NewAuthenticatedOriginPullsCertificate(scope Construct, id *string, config AuthenticatedOriginPullsCertificateConfig) AuthenticatedOriginPullsCertificate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig">AuthenticatedOriginPullsCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig">AuthenticatedOriginPullsCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AuthenticatedOriginPullsCertificate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/authenticatedoriginpullscertificate"

authenticatedoriginpullscertificate.AuthenticatedOriginPullsCertificate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/authenticatedoriginpullscertificate"

authenticatedoriginpullscertificate.AuthenticatedOriginPullsCertificate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/authenticatedoriginpullscertificate"

authenticatedoriginpullscertificate.AuthenticatedOriginPullsCertificate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/authenticatedoriginpullscertificate"

authenticatedoriginpullscertificate.AuthenticatedOriginPullsCertificate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AuthenticatedOriginPullsCertificate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AuthenticatedOriginPullsCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AuthenticatedOriginPullsCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/authenticated_origin_pulls_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AuthenticatedOriginPullsCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.certificateId">CertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.expiresOn">ExpiresOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.signature">Signature</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.uploadedOn">UploadedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.certificateInput">CertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.privateKeyInput">PrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.certificateId"></a>

```go
func CertificateId() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ExpiresOn`<sup>Required</sup> <a name="ExpiresOn" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.expiresOn"></a>

```go
func ExpiresOn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.signature"></a>

```go
func Signature() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UploadedOn`<sup>Required</sup> <a name="UploadedOn" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.uploadedOn"></a>

```go
func UploadedOn() *string
```

- *Type:* *string

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.certificateInput"></a>

```go
func CertificateInput() *string
```

- *Type:* *string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.privateKeyInput"></a>

```go
func PrivateKeyInput() *string
```

- *Type:* *string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AuthenticatedOriginPullsCertificateConfig <a name="AuthenticatedOriginPullsCertificateConfig" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/authenticatedoriginpullscertificate"

&authenticatedoriginpullscertificate.AuthenticatedOriginPullsCertificateConfig {
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
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.certificate">Certificate</a></code> | <code>*string</code> | The zone's leaf certificate. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.privateKey">PrivateKey</a></code> | <code>*string</code> | The zone's private key. |
| <code><a href="#@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | Identifier. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.certificate"></a>

```go
Certificate *string
```

- *Type:* *string

The zone's leaf certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/authenticated_origin_pulls_certificate#certificate AuthenticatedOriginPullsCertificate#certificate}

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.privateKey"></a>

```go
PrivateKey *string
```

- *Type:* *string

The zone's private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/authenticated_origin_pulls_certificate#private_key AuthenticatedOriginPullsCertificate#private_key}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.authenticatedOriginPullsCertificate.AuthenticatedOriginPullsCertificateConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/authenticated_origin_pulls_certificate#zone_id AuthenticatedOriginPullsCertificate#zone_id}

---



