# `emailSecurityImpersonationRegistry` Submodule <a name="`emailSecurityImpersonationRegistry` Submodule" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmailSecurityImpersonationRegistry <a name="EmailSecurityImpersonationRegistry" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/email_security_impersonation_registry cloudflare_email_security_impersonation_registry}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/emailsecurityimpersonationregistry"

emailsecurityimpersonationregistry.NewEmailSecurityImpersonationRegistry(scope Construct, id *string, config EmailSecurityImpersonationRegistryConfig) EmailSecurityImpersonationRegistry
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig">EmailSecurityImpersonationRegistryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig">EmailSecurityImpersonationRegistryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EmailSecurityImpersonationRegistry resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/emailsecurityimpersonationregistry"

emailsecurityimpersonationregistry.EmailSecurityImpersonationRegistry_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/emailsecurityimpersonationregistry"

emailsecurityimpersonationregistry.EmailSecurityImpersonationRegistry_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/emailsecurityimpersonationregistry"

emailsecurityimpersonationregistry.EmailSecurityImpersonationRegistry_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/emailsecurityimpersonationregistry"

emailsecurityimpersonationregistry.EmailSecurityImpersonationRegistry_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a EmailSecurityImpersonationRegistry resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EmailSecurityImpersonationRegistry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EmailSecurityImpersonationRegistry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/email_security_impersonation_registry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the EmailSecurityImpersonationRegistry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.comments">Comments</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.directoryId">DirectoryId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.directoryNodeId">DirectoryNodeId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.externalDirectoryNodeId">ExternalDirectoryNodeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.id">Id</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.provenance">Provenance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.isEmailRegexInput">IsEmailRegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.isEmailRegex">IsEmailRegex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Comments`<sup>Required</sup> <a name="Comments" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.comments"></a>

```go
func Comments() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.directoryId"></a>

```go
func DirectoryId() *f64
```

- *Type:* *f64

---

##### `DirectoryNodeId`<sup>Required</sup> <a name="DirectoryNodeId" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.directoryNodeId"></a>

```go
func DirectoryNodeId() *f64
```

- *Type:* *f64

---

##### `ExternalDirectoryNodeId`<sup>Required</sup> <a name="ExternalDirectoryNodeId" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.externalDirectoryNodeId"></a>

```go
func ExternalDirectoryNodeId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.id"></a>

```go
func Id() *f64
```

- *Type:* *f64

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `Provenance`<sup>Required</sup> <a name="Provenance" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.provenance"></a>

```go
func Provenance() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `IsEmailRegexInput`<sup>Optional</sup> <a name="IsEmailRegexInput" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.isEmailRegexInput"></a>

```go
func IsEmailRegexInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `IsEmailRegex`<sup>Required</sup> <a name="IsEmailRegex" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.isEmailRegex"></a>

```go
func IsEmailRegex() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistry.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EmailSecurityImpersonationRegistryConfig <a name="EmailSecurityImpersonationRegistryConfig" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/emailsecurityimpersonationregistry"

&emailsecurityimpersonationregistry.EmailSecurityImpersonationRegistryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Email: *string,
	IsEmailRegex: interface{},
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Account Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.email">Email</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/email_security_impersonation_registry#email EmailSecurityImpersonationRegistry#email}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.isEmailRegex">IsEmailRegex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/email_security_impersonation_registry#is_email_regex EmailSecurityImpersonationRegistry#is_email_regex}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/email_security_impersonation_registry#name EmailSecurityImpersonationRegistry#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Account Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/email_security_impersonation_registry#account_id EmailSecurityImpersonationRegistry#account_id}

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.email"></a>

```go
Email *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/email_security_impersonation_registry#email EmailSecurityImpersonationRegistry#email}.

---

##### `IsEmailRegex`<sup>Required</sup> <a name="IsEmailRegex" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.isEmailRegex"></a>

```go
IsEmailRegex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/email_security_impersonation_registry#is_email_regex EmailSecurityImpersonationRegistry#is_email_regex}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.emailSecurityImpersonationRegistry.EmailSecurityImpersonationRegistryConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.18.0/docs/resources/email_security_impersonation_registry#name EmailSecurityImpersonationRegistry#name}.

---



