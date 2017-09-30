
import { Cmp6431Component } from './cmp';
describe('Cmp6431Component', () => {
  it('should add', () => {
    expect(new Cmp6431Component().add6431(1)).toBe(6432);
  });
});