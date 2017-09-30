
import { Cmp7209Component } from './cmp';
describe('Cmp7209Component', () => {
  it('should add', () => {
    expect(new Cmp7209Component().add7209(1)).toBe(7210);
  });
});