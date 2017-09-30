
import { Cmp9037Component } from './cmp';
describe('Cmp9037Component', () => {
  it('should add', () => {
    expect(new Cmp9037Component().add9037(1)).toBe(9038);
  });
});