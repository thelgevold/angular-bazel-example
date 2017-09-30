
import { Cmp7182Component } from './cmp';
describe('Cmp7182Component', () => {
  it('should add', () => {
    expect(new Cmp7182Component().add7182(1)).toBe(7183);
  });
});