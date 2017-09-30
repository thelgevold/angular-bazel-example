
import { Cmp6503Component } from './cmp';
describe('Cmp6503Component', () => {
  it('should add', () => {
    expect(new Cmp6503Component().add6503(1)).toBe(6504);
  });
});