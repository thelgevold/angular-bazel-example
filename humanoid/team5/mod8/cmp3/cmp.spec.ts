
import { Cmp7583Component } from './cmp';
describe('Cmp7583Component', () => {
  it('should add', () => {
    expect(new Cmp7583Component().add7583(1)).toBe(7584);
  });
});