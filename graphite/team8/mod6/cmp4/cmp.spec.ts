
import { Cmp6864Component } from './cmp';
describe('Cmp6864Component', () => {
  it('should add', () => {
    expect(new Cmp6864Component().add6864(1)).toBe(6865);
  });
});