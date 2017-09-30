
import { Cmp2037Component } from './cmp';
describe('Cmp2037Component', () => {
  it('should add', () => {
    expect(new Cmp2037Component().add2037(1)).toBe(2038);
  });
});