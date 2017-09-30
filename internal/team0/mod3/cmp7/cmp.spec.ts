
import { Cmp8037Component } from './cmp';
describe('Cmp8037Component', () => {
  it('should add', () => {
    expect(new Cmp8037Component().add8037(1)).toBe(8038);
  });
});