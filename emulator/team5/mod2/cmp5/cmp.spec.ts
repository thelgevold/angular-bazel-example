
import { Cmp4525Component } from './cmp';
describe('Cmp4525Component', () => {
  it('should add', () => {
    expect(new Cmp4525Component().add4525(1)).toBe(4526);
  });
});