
import { Cmp6345Component } from './cmp';
describe('Cmp6345Component', () => {
  it('should add', () => {
    expect(new Cmp6345Component().add6345(1)).toBe(6346);
  });
});