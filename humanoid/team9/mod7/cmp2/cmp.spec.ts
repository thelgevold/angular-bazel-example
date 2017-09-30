
import { Cmp7972Component } from './cmp';
describe('Cmp7972Component', () => {
  it('should add', () => {
    expect(new Cmp7972Component().add7972(1)).toBe(7973);
  });
});