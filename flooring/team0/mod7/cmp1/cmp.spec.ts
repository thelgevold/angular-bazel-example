
import { Cmp5071Component } from './cmp';
describe('Cmp5071Component', () => {
  it('should add', () => {
    expect(new Cmp5071Component().add5071(1)).toBe(5072);
  });
});