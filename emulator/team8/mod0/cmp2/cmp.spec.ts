
import { Cmp4802Component } from './cmp';
describe('Cmp4802Component', () => {
  it('should add', () => {
    expect(new Cmp4802Component().add4802(1)).toBe(4803);
  });
});