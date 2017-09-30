
import { Cmp7206Component } from './cmp';
describe('Cmp7206Component', () => {
  it('should add', () => {
    expect(new Cmp7206Component().add7206(1)).toBe(7207);
  });
});