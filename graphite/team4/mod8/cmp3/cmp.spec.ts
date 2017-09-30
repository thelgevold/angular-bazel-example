
import { Cmp6483Component } from './cmp';
describe('Cmp6483Component', () => {
  it('should add', () => {
    expect(new Cmp6483Component().add6483(1)).toBe(6484);
  });
});