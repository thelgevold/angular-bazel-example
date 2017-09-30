
import { Cmp7161Component } from './cmp';
describe('Cmp7161Component', () => {
  it('should add', () => {
    expect(new Cmp7161Component().add7161(1)).toBe(7162);
  });
});