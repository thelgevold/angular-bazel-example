
import { Cmp7674Component } from './cmp';
describe('Cmp7674Component', () => {
  it('should add', () => {
    expect(new Cmp7674Component().add7674(1)).toBe(7675);
  });
});