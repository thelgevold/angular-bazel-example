
import { Cmp9188Component } from './cmp';
describe('Cmp9188Component', () => {
  it('should add', () => {
    expect(new Cmp9188Component().add9188(1)).toBe(9189);
  });
});