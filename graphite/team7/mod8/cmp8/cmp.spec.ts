
import { Cmp6788Component } from './cmp';
describe('Cmp6788Component', () => {
  it('should add', () => {
    expect(new Cmp6788Component().add6788(1)).toBe(6789);
  });
});