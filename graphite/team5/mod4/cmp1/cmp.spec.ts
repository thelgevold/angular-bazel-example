
import { Cmp6541Component } from './cmp';
describe('Cmp6541Component', () => {
  it('should add', () => {
    expect(new Cmp6541Component().add6541(1)).toBe(6542);
  });
});