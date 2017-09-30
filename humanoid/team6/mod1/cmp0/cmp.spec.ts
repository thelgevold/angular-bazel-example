
import { Cmp7610Component } from './cmp';
describe('Cmp7610Component', () => {
  it('should add', () => {
    expect(new Cmp7610Component().add7610(1)).toBe(7611);
  });
});