
import { Cmp6900Component } from './cmp';
describe('Cmp6900Component', () => {
  it('should add', () => {
    expect(new Cmp6900Component().add6900(1)).toBe(6901);
  });
});