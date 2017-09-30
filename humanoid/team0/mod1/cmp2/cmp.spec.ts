
import { Cmp7012Component } from './cmp';
describe('Cmp7012Component', () => {
  it('should add', () => {
    expect(new Cmp7012Component().add7012(1)).toBe(7013);
  });
});