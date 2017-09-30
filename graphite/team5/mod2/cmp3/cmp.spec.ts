
import { Cmp6523Component } from './cmp';
describe('Cmp6523Component', () => {
  it('should add', () => {
    expect(new Cmp6523Component().add6523(1)).toBe(6524);
  });
});