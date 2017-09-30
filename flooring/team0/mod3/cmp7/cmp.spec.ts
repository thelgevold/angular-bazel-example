
import { Cmp5037Component } from './cmp';
describe('Cmp5037Component', () => {
  it('should add', () => {
    expect(new Cmp5037Component().add5037(1)).toBe(5038);
  });
});