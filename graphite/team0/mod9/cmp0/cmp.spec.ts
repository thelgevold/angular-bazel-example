
import { Cmp6090Component } from './cmp';
describe('Cmp6090Component', () => {
  it('should add', () => {
    expect(new Cmp6090Component().add6090(1)).toBe(6091);
  });
});