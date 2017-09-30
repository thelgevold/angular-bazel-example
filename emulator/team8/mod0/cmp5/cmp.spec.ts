
import { Cmp4805Component } from './cmp';
describe('Cmp4805Component', () => {
  it('should add', () => {
    expect(new Cmp4805Component().add4805(1)).toBe(4806);
  });
});