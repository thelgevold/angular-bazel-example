
import { Cmp4823Component } from './cmp';
describe('Cmp4823Component', () => {
  it('should add', () => {
    expect(new Cmp4823Component().add4823(1)).toBe(4824);
  });
});