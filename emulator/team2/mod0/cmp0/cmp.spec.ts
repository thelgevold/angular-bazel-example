
import { Cmp4200Component } from './cmp';
describe('Cmp4200Component', () => {
  it('should add', () => {
    expect(new Cmp4200Component().add4200(1)).toBe(4201);
  });
});